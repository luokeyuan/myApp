import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsPage } from './buttons';
import { ButtonsTopPageModule } from './buttons-top/buttons-top.module';
import { ButtonsBottomPageModule } from './buttons-bottom/buttons-bottom.module';

@NgModule({
  declarations: [
    ButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsPage),
    ButtonsTopPageModule,
    ButtonsBottomPageModule,
  ],
})
export class ButtonsPageModule {}
