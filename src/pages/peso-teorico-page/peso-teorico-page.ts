import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-peso-teorico-page',
  templateUrl: 'peso-teorico-page.html',
})
export class PesoTeoricoPage {

  altura: number;
  idade: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  calcular() {
    if (this.altura && this.idade) {
      let resultado = this.altura - 100 + this.idade / 10 * 0.9;
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Peso: " + resultado.toFixed(2) + " kg",
        buttons: ["Ok"]
      });
      alert.present();
    } else {
      let alert = this.alert.create({
        title: "Preencha todos os campos!",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }
}
