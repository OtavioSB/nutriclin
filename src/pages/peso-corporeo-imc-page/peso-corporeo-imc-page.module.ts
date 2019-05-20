import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesoCorporeoImcPage } from './peso-corporeo-imc-page';

@NgModule({
  declarations: [
    PesoCorporeoImcPage,
  ],
  imports: [
    IonicPageModule.forChild(PesoCorporeoImcPage),
  ],
})
export class PesoCorporeoImcPageModule {}
