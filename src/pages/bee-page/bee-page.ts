import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-bee-page',
  templateUrl: 'bee-page.html',
})
export class BeePage {

  sexo:boolean = true;
  peso: number;
  estatura: number;
  idade: number;
  public userSelecionado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public storage: Storage) {
  }

  setSexo(){
    this.sexo = !this.sexo;
  }

  async calcular() {
    if (this.estatura && this.peso && this.idade) {
      let resultado;
      if (this.sexo) { //homem
        resultado = (204 - (4 * this.idade) + (450.5 * this.estatura) + (11.69 * this.peso));
      } else { // mulher
        resultado = (225 - (2.35 * this.idade) + (401.5 * this.estatura) + (9.39 * this.peso));
      }
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Kcal/dia: " + resultado.toFixed(2),
        buttons: ["Ok"]
      });
      alert.present();

      await this.storage.get('userSelecionado').then((result) => {
        this.userSelecionado = result;
        this.userSelecionado.bee.push(resultado.toFixed(2));
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
