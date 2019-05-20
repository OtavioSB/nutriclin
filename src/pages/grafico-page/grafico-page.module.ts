import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficoPage } from './grafico-page';

@NgModule({
  declarations: [
    GraficoPage,
  ],
  imports: [
    IonicPageModule.forChild(GraficoPage),
  ],
})
export class GraficoPageModule {}
