import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesoCorpAnt } from './peso-corp-ant';

@NgModule({
  declarations: [
    PesoCorpAnt,
  ],
  imports: [
    IonicPageModule.forChild(PesoCorpAnt),
  ],
})
export class PesoCorpAntModule {}
