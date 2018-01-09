import { Injectable } from '@angular/core';

import { Character } from '../../models/character';

@Injectable()
export class Characters {
  characters: Character[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "largePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let characters = [
      {
        "name": "Brute",
        "profilePic": "assets/img/speakers/brute_avatar.png",
        "largePic": "assets/img/speakers/brute_profile.png",
        "about": "The Brute is your typical tank. He gets up in the monster's face with melee attacks and has defensive abilities."
      },
      {
        "name": "Scoundrel",
        "profilePic": "assets/img/speakers/scoundrel_avatar.png",
        "largePic": "assets/img/speakers/scoundrel_avatar.png",
        "about": "The Scoundrel is an opportunistic melee attacker. She can deal huge damage in the right circumstances."
      },
      {
        "name": "Spellweaver",
        "profilePic": "assets/img/speakers/spellweaver_avatar.png",
        "largePic": "assets/img/speakers/spellweaver_avatar.png",
        "about": "The Spellweaver is your multi-target ranged attacker, throwing out big spells to do lots of damage, but she can burn out quickly if you don't play your cards right."
      },
      {
        "name": "Tinkerer",
        "profilePic": "assets/img/speakers/tinkerer_avatar.png",
        "largePic": "assets/img/speakers/tinkerer_avatar.png",
        "about": "The Tinkerer is healing and support, providing bonuses to his allies and negatives to his enemies. He's also got a good amount of ranged damage."
      },
      {
        "name": "Cragheart",
        "profilePic": "assets/img/speakers/cragheart_avatar.png",
        "largePic": "assets/img/speakers/cragheart_avatar.png",
        "about": "The Cragheart is more of a jack-of-all-trades. It's got melee attacks, ranged attacks, and healing, but you also have to be careful about hurting your allies."
      },
      {
        "name": "Mindthief",
        "profilePic": "assets/img/speakers/mindthief_avatar.png",
        "largePic": "assets/img/speakers/mindthief_avatar.png",
        "about": "The Mindthief is just weird. She has a lot of crazy abilities - summoning, mind control, and psychic augments that enhance her melee attacks."
      }
    ];

    for (let character of characters) {
      this.characters.push(new Character(character));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.characters;
    }

    return this.characters.filter((character) => {
      for (let key in params) {
        let field = character[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return character;
        } else if (field == params[key]) {
          return character;
        }
      }
      return null;
    });
  }

  add(: Character) {
    this.characters.push();
  }

  delete(: Character) {
    this.characters.splice(this.characters.indexOf(), 1);
  }
}
