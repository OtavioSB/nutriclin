import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-peso-corp-ant',
  templateUrl: 'peso-corp-ant.html',
})
export class PesoCorpAnt {

  sexo:boolean = true;
  alturaJ:number;
  circunferenciaP:number;
  circunferenciaB:number;
  prega:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  setSexo(){
    this.sexo = !this.sexo;
  }

  calcular() {
    if (this.alturaJ && this.circunferenciaB && this.circunferenciaP && this.prega) {
      let resultado;
      if (this.sexo) { //homem
        resultado = ( (1.27 * this.circunferenciaP) + (0.87 * this.alturaJ) + (0.998 * this.circunferenciaB) + (0.4 * this.prega) - 62.35 );
      } else { // mulher
        resultado = ( (0.98 * this.circunferenciaP) + (1.16 * this.alturaJ) + ( 1.73 * this.circunferenciaB) + (0.37 * this.prega) - 81.69 );
      }
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Peso: " + resultado.toFixed(2) + " Kg",
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
