import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hb-page',
  templateUrl: 'hb-page.html',
})
export class HbPage {

  sexo: boolean = true;
  peso: number;
  estatura: number;
  idade: number;
  public userSelecionado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public storage: Storage) {
  }

  setSexo() {
    this.sexo = !this.sexo;
  }

  async calcular() {
    if (this.estatura && this.peso && this.idade) {
      let resultado;
      if (this.sexo) { //homem
        resultado = (66 + (13.7 * this.peso) + (5 * this.estatura) - (6.8 * this.idade));
      } else { // mulher
        resultado = (665 + (9.6 * this.peso) + (1.7 * this.estatura) - (4.7 * this.idade));
      }
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Kcal: " + resultado.toFixed(2),
        buttons: ["Ok"]
      });
      alert.present();

      await this.storage.get('userSelecionado').then((result) => {
        this.userSelecionado = result;
        this.userSelecionado.nee.push(resultado.toFixed(2));
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


}
