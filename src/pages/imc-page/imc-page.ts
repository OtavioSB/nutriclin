import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { variable } from '@angular/compiler/src/output/output_ast';
import { GraficoPage } from '../grafico-page/grafico-page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-imc-page',
  templateUrl: 'imc-page.html',
})
export class ImcPage {

  peso: number;
  altura: number;
  classificacao: string;
  nums: any;
  graficoPage = GraficoPage;
  public userSelecionado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, private storage: Storage) {
    this.nums = new Array();
  }

  async calcular() {
    if (this.altura && this.peso) {
      let resultado = (this.peso / (this.altura * this.altura));

      if (resultado < 16) {
        this.classificacao = "Magreza grau 3";
      } else {
        if (resultado > 16 && resultado < 16.9) {
          this.classificacao = "Magreza grau 2";
        } else {
          if (resultado > 17 && resultado < 18.4) {
            this.classificacao = "Magreza grau 1";
          } else {
            if (resultado > 18.5 && resultado < 24.9) {
              this.classificacao = "Eutrofia/Normal";
            } else {
              if (resultado > 25 && resultado < 29.9) {
                this.classificacao = "Pré obeso/sobrepeso";
              } else {
                if (resultado > 30 && resultado < 34.9) {
                  this.classificacao = "Obesidade grau 1";
                } else {
                  if (resultado > 35 && resultado < 39.9) {
                    this.classificacao = "Obesidade grau 2";
                  } else {
                    if (resultado > 40) {
                      this.classificacao = "Obesidade grau 3";
                    }
                  }
                }
              }
            }
          }
        }
      }

      let alert = this.alert.create({
        title: this.classificacao,
        subTitle: "IMC: " + resultado.toFixed(2),
        buttons: ["Ok"]
      });
      alert.present();

      await this.storage.get('userSelecionado').then((result) => {
        this.userSelecionado = result;
        this.userSelecionado.imc.push(resultado.toFixed(2));
      });

      await this.storage.remove('userSelecionado');

      await this.storage.set('userSelecionado', this.userSelecionado);

    } else {
      let alert = this.alert.create({
        title: "Preencha todos os campos!",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }

  // salvar() {
  //   if (this.altura && this.peso) {
  //     let resultado = (this.peso / (this.altura * this.altura));
  //     //let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
  //     this.nums.push(resultado);
  //     //salva dados no storage
  //     this.storage.set('nums', this.nums);
      
  //     let alert = this.alert.create({
  //       title: "Salvo com sucesso!",
  //       buttons: ["Ok"]
  //     });
  //     alert.present();
  //   } else {
  //     let alert = this.alert.create({
  //       title: "Preencha todos os campos!",
  //       buttons: ["Ok"]
  //     });
  //     alert.present();
  //   }
  // }
}
