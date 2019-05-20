import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HbPage } from './hb-page';

@NgModule({
  declarations: [
    HbPage,
  ],
  imports: [
    IonicPageModule.forChild(HbPage),
  ],
})
export class HbPageModule {}
