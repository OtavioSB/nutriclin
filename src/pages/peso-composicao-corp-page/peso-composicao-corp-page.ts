import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-peso-composicao-corp-page',
  templateUrl: 'peso-composicao-corp-page.html',
})
export class PesoComposicaoCorpPage {

  circunferenciaP: number;
  altura: number;
  sexo: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  setSexo(){
    this.sexo = !this.sexo;
  }

  calcular() {
    if (this.circunferenciaP && this.altura) {
      let complecao;
      let resultado = this.altura / this.circunferenciaP;
      if (this.sexo) { //homem
       if(resultado < 9.6){
        complecao = "Grande";
       }else{
         if(resultado >= 9.6 && resultado < 10.4){
          complecao = "Media";
         }else{
           complecao = "Pequena";
         }
       }
      } else { // mulher
        if(resultado < 10.1){
          complecao = "Grande";
         }else{
           if(resultado >= 10.1 && resultado < 11){
            complecao = "Media";
           }else{
             complecao = "Pequena";
           }
         }
      }
      let alert = this.alert.create({
        title: "Compleção corporal: " + complecao,
        subTitle:resultado.toFixed(2),
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
