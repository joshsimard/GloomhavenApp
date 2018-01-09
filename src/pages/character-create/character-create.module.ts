import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharacterCreatePage } from './character-create';

@NgModule({
  declarations: [
    CharacterCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    CharacterCreatePage
  ]
})
export class CharacterCreatePageModule { }
