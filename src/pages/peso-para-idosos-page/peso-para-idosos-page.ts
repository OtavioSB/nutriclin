import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-peso-para-idosos-page',
  templateUrl: 'peso-para-idosos-page.html',
})
export class PesoParaIdososPage {

  cor: boolean = true;
  sexo: boolean = true;
  circunferenciaB: number;
  alturaJ: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  setCor(){
    this.cor = !this.cor;
  }

  setSexo(){
    this.sexo = !this.sexo;
  }

  calcular() {
    if (this.circunferenciaB && this.alturaJ) {
      let resultado;
      if(this.sexo){//homem
        if(this.cor){//branco
          resultado = (this.alturaJ * 0.44) + (this.circunferenciaB * 2.86) - 39.21;
        }else{
          resultado = (this.alturaJ * 1.1) + (this.circunferenciaB * 3.07) - 75.81;
        }
      }else{//mulher
        if(this.cor){//branco
          resultado = (this.alturaJ * 1.5) + ( this.circunferenciaB * 2.58 ) - 84.22;
        }else{
          resultado = (this.alturaJ * 1.09) + ( this.circunferenciaB * 2.68) - 65.51;
        }
      }
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
