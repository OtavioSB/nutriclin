import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class Cadastro {

  searchQuery: string = '';
  items: string[];
  homePage = HomePage;
  nome: string;
  telefone: number;
  usuarios: any;
  userSelecionado: any;
  userSelecionadoAntigo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, private storage: Storage) {
    this.initializeItems();
    this.usuarios = new Array();
  }

  ionViewDidLoad() {
    this.storage.get('usuarios').then((val) => {
      this.usuarios = val;
      for (var _i = 0; _i < this.usuarios.length; _i++) {
        let user = this.usuarios[_i];
      }
    });
  }

  initializeItems() {
    this.storage.get('usuarios').then((val) => {
      this.items = val;
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.storage.get('usuarios').then((result) => {
        this.usuarios = result;

        this.items = this.usuarios.filter((item) => {
          return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      });
      
      
    }
  }

  async itemSelected(item){
    
    let alert = this.alert.create({
      title: "Paciente " + item.nome + " selecionado",
      buttons: ["Ok"]
    });
    
    let i;
    
    this.usuarios;

    await this.storage.get('userSelecionado').then((result) => {
      this.userSelecionadoAntigo = result;
    });

    for(i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].nome == item.nome){
        this.userSelecionado = this.usuarios[i]
      }  
    }

    if(this.userSelecionadoAntigo){
      for(i = 0; i < this.usuarios.length; i++){
        if(this.usuarios[i].nome == this.userSelecionadoAntigo.nome){
          this.usuarios[i] = this.userSelecionadoAntigo;
        }  
      }
    }

    await this.storage.remove('usuarios');

    await this.storage.set('usuarios', this.usuarios);

    await this.storage.set('userSelecionado', this.userSelecionado);

    alert.present();
    this.navCtrl.push(this.homePage);
  }

  async salvar() {
    if (this.nome && this.telefone) {
      let usuario = new Usuario(this.nome, this.telefone);
      if(this.usuarios == null)
        this.usuarios = new Array();
      this.usuarios.push(usuario);
      //salva dados no storage
      await this.storage.set('usuarios', this.usuarios);
      await this.storage.set('userSelecionado', usuario);
      
      let alert = this.alert.create({
        title: "Salvo com sucesso!",
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
    this.navCtrl.push(this.homePage);
  }
}

class Usuario {
  public nome: string;
  public telefone: number;
  public imc: any;
  public bee: any;
  public eer: any;
  public nee: any;
  constructor(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
    this.imc = new Array();
    this.bee = new Array();
    this.eer = new Array();
    this.nee = new Array();
  }
  public getNome(){
      return this.nome;
  }
  public getTelefone(){
      return this.telefone;
  }
}
