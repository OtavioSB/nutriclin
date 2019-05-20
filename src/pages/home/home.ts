import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cadastro } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cadastroPage = Cadastro;
  constructor(public navCtrl: NavController) {

  }

}
