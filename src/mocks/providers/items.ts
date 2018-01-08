import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Brute",
        "profilePic": "assets/img/speakers/brute_avatar.png",
        "about": "The Brute is your typical tank. He gets up in the monster's face with melee attacks and has defensive abilities."
      },
      {
        "name": "Scoundrel",
        "profilePic": "assets/img/speakers/scoundrel_avatar.png",
        "about": "The Scoundrel is an opportunistic melee attacker. She can deal huge damage in the right circumstances."
      },
      {
        "name": "Spellweaver",
        "profilePic": "assets/img/speakers/spellweaver_avatar.png",
        "about": "The Spellweaver is your multi-target ranged attacker, throwing out big spells to do lots of damage, but she can burn out quickly if you don't play your cards right."
      },
      {
        "name": "Tinkerer",
        "profilePic": "assets/img/speakers/tinkerer_avatar.png",
        "about": "The Tinkerer is healing and support, providing bonuses to his allies and negatives to his enemies. He's also got a good amount of ranged damage."
      },
      {
        "name": "Cragheart",
        "profilePic": "assets/img/speakers/cragheart_avatar.png",
        "about": "The Cragheart is more of a jack-of-all-trades. It's got melee attacks, ranged attacks, and healing, but you also have to be careful about hurting your allies."
      },
      {
        "name": "Mindthief",
        "profilePic": "assets/img/speakers/mindthief_avatar.png",
        "about": "The Mindthief is just weird. She has a lot of crazy abilities - summoning, mind control, and psychic augments that enhance her melee attacks."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
