import { Injectable } from '@angular/core';

import { Character } from '../../models/character';
import { Api } from '../api/api';

@Injectable()
export class Characters {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/characters', params);
  }

  add(character: Character) {
  }

  delete(character: Character) {
  }

}
