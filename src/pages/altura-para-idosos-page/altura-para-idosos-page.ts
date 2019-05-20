import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-altura-para-idosos-page',
  templateUrl: 'altura-para-idosos-page.html',
})
export class AlturaParaIdososPage {

  cor: boolean = true;
  sexo: boolean = true;
  idade: number;
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
    if (this.idade && this.alturaJ) {
      let resultado;
      if(this.sexo){//homem
        if(this.cor){//branco
          resultado = 59.01 + ( 2.08 * this.alturaJ)
        }else{
          resultado = 95.79 + (1.37 * this.alturaJ)
        }
      }else{//mulher
        if(this.cor){//branco
          resultado = 75 + ( 1.91 * this.alturaJ) - (0.17 * this.idade);
        }else{
          resultado = 58.72 + (1.96 * this.alturaJ);
        }
      }
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Altura: " + resultado.toFixed(0) + " cm",
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
