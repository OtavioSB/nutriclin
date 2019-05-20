import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-grafico-page',
  templateUrl: 'grafico-page.html',
})
export class GraficoPage {

  @ViewChild('graficoIMC') lineCanvasIMC;
  @ViewChild('graficoBEE') lineCanvasBEE;
  @ViewChild('graficoEER') lineCanvasEER;
  @ViewChild('graficoNEE') lineCanvasNEE;

  lineChartIMC: any;
  lineChartBEE: any;
  lineChartEER: any;
  lineChartNEE: any;
  public imc: any;
  public bee: any;
  public eer: any;
  public nee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
  }

  async doRefresh(refresher){
    await this.storage.get('userSelecionado').then((val) => {
      this.imc = val.imc;
      // if(this.nums == null){
      //   this.nums = new Array();
      //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
      //   this.nums.push(resultado);
      // }
      this.lineChartIMC = new Chart(this.lineCanvasIMC.nativeElement, {

        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Consultas corridas",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.imc,
              spanGaps: false,
            }
          ]
        }
      });
    });

    await this.storage.get('userSelecionado').then((val) => {
      this.bee = val.bee;
      // if(this.nums == null){
      //   this.nums = new Array();
      //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
      //   this.nums.push(resultado);
      // }
      this.lineChartBEE = new Chart(this.lineCanvasBEE.nativeElement, {

        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Consultas corridas",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.bee,
              spanGaps: false,
            }
          ]
        }
      });
    });

    await this.storage.get('userSelecionado').then((val) => {
      this.eer = val.eer;
      // if(this.nums == null){
      //   this.nums = new Array();
      //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
      //   this.nums.push(resultado);
      // }
      this.lineChartEER = new Chart(this.lineCanvasEER.nativeElement, {

        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Consultas corridas",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.eer,
              spanGaps: false,
            }
          ]
        }
      });
    });

    await this.storage.get('userSelecionado').then((val) => {
      this.nee = val.nee;
      // if(this.nums == null){
      //   this.nums = new Array();
      //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
      //   this.nums.push(resultado);
      // }
      this.lineChartNEE = new Chart(this.lineCanvasNEE.nativeElement, {

        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Consultas corridas",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: this.nee,
              spanGaps: false,
            }
          ]
        }
      });
    });
    if(refresher != 0)
      refresher.complete();
  };

  async ngOnInit() {
    this.doRefresh(0);
  }
}
