import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-peso-ajustado-page',
  templateUrl: 'peso-ajustado-page.html',
})
export class PesoAjustadoPage {

  pesoA:number;
  pesoI:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }
  calcular() {
    if (this.pesoA && this.pesoI) {
      let resultado = ( this.pesoI - this.pesoA) * 0.25 + this.pesoA;
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Peso: " + resultado,
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
