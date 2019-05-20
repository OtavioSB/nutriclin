import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calculos } from './calculos';

@NgModule({
  declarations: [
    Calculos,
  ],
  imports: [
    IonicPageModule.forChild(Calculos),
  ],
})
export class CalculosModule {}
