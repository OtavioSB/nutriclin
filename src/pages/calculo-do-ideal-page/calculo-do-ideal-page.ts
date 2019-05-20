import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-calculo-do-ideal-page',
  templateUrl: 'calculo-do-ideal-page.html',
})
export class CalculoDoIdealPage {

  imcDesejado: number;
  estatura: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  calcular() {
    if (this.estatura && this.imcDesejado) {
      let resultado = this.imcDesejado * (this.estatura * this.estatura); 
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Peso: " + resultado.toFixed(2) + "Kg",
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
