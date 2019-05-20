import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-adequacao-peso-page',
  templateUrl: 'adequacao-peso-page.html',
})
export class AdequacaoPesoPage {

  pesoA: number;
  pesoI: number;
  classificacao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  calcular() {
    if (this.pesoA && this.pesoI) {

      let resultado = this.pesoA * 100 / this.pesoI;

      if (resultado < 70) {
        this.classificacao = "Desnutrição grave";
      } else {
        if (resultado > 70.1 && resultado < 80) {
          this.classificacao = "Desnutrição moderada";
        } else {
          if (resultado > 80.1 && resultado < 90) {
            this.classificacao = "Desnutrição leve";
          } else {
            if (resultado > 90.1 && resultado < 110) {
              this.classificacao = "Eutrofia";
            } else {
              if (resultado > 110.1 && resultado < 120) {
                this.classificacao = "Sobrepeso";
              } else {
                if (resultado > 120) {
                  this.classificacao = "Obesidade";
                }
              }
            }
          }
        }
      }

      let alert = this.alert.create({
        title: this.classificacao,
        subTitle: "Adequação: " + resultado.toFixed(2),
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
