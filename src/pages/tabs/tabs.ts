import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Calculos } from '../calculos/calculos';
import { GraficoPage } from '../grafico-page/grafico-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = GraficoPage;
  tab2Root = Calculos;

  constructor() {

  }
}
