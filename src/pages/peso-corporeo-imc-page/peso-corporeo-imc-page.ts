import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-peso-corporeo-imc-page',
  templateUrl: 'peso-corporeo-imc-page.html',
})
export class PesoCorporeoImcPage {

  imc: number;
  altura: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  calcular() {
    if (this.altura && this.imc) {
      let resultado = (this.altura * this.altura) * this.imc;
      resultado = resultado/10000;
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
