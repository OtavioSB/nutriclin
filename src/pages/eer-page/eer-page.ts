import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-eer-page',
  templateUrl: 'eer-page.html',
})
export class EerPage {

  sexo: boolean = true;
  sedentario: boolean = true;
  poucoAtivo: boolean;
  ativo: boolean;
  muitoAtivo: boolean;
  peso: number;
  estatura: number;
  idade: number;
  public userSelecionado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public storage: Storage) {
  }

  setSexo() {
    this.sexo = !this.sexo;
  }

  setSedentario() {
    this.sedentario = true;
    this.poucoAtivo = false;
    this.ativo = false;
    this.muitoAtivo = false;
  }

  setPoucoAtivo() {
    this.sedentario = false;
    this.poucoAtivo = true;
    this.ativo = false;
    this.muitoAtivo = false;
  }

  setAtivo() {
    this.sedentario = false;
    this.poucoAtivo = false;
    this.ativo = true;
    this.muitoAtivo = false;
  }

  setMuitoAtivo() {
    this.sedentario = false;
    this.poucoAtivo = false;
    this.ativo = false;
    this.muitoAtivo = true;
  }

  async calcular() {
    if (this.estatura && this.peso && this.idade) {
      let pa;
      let resultado;
      if (this.sexo) { // homem
        if(this.sedentario)
          pa = 1;
        if(this.poucoAtivo)
          pa = 1.11;
        if(this.ativo)
          pa = 1.25;
        if(this.muitoAtivo)
          pa = 1.48;
        resultado = (662 - (9.93 * this.idade) + (pa * (15.91 * this.peso)) + (539.6 * this.estatura));
      } else { // mulher
        if(this.sedentario)
          pa = 1;
        if(this.poucoAtivo)
          pa = 1.12;
        if(this.ativo)
          pa = 1.27;
        if(this.muitoAtivo)
          pa = 1.45;
        resultado = (354 - (6.91 * this.idade) + (pa * (9.36 * this.peso)) + (726 * this.estatura));
      }
      let alert = this.alert.create({
        title: "Resultado",
        subTitle: "Kcal: " + resultado.toFixed(2),
        buttons: ["Ok"]
      });
      alert.present();

      await this.storage.get('userSelecionado').then((result) => {
        this.userSelecionado = result;
        this.userSelecionado.eer.push(resultado.toFixed(2));
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
