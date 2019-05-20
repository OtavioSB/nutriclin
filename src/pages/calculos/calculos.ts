import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ImcPage } from '../imc-page/imc-page';
import { BeePage } from '../bee-page/bee-page';
import { EerPage } from '../eer-page/eer-page';
import { HbPage } from '../hb-page/hb-page';
import { PesoCorporeoImcPage } from '../peso-corporeo-imc-page/peso-corporeo-imc-page';
import { PesoTeoricoPage } from '../peso-teorico-page/peso-teorico-page';
import { PesoCorpAnt } from '../peso-corp-ant/peso-corp-ant';
import { CalculoDoIdealPage } from '../calculo-do-ideal-page/calculo-do-ideal-page';
import { AdequacaoPesoPage } from '../adequacao-peso-page/adequacao-peso-page';
import { PesoAjustadoPage } from '../peso-ajustado-page/peso-ajustado-page';
import { PesoParaIdososPage } from '../peso-para-idosos-page/peso-para-idosos-page';
import { AlturaParaIdososPage } from '../altura-para-idosos-page/altura-para-idosos-page';
import { PesoComposicaoCorpPage } from '../peso-composicao-corp-page/peso-composicao-corp-page';

@Component({
  selector: 'page-calculos',
  templateUrl: 'calculos.html',
})
export class Calculos {

  private mensagemAtiva: boolean = true;
  private mensagemCard1: string = "";
  private fontCard1: string = "";
  private mensagemCard2: string = "";
  private fontCard2: string = "";
  private mensagemCard3: string = "";
  private fontCard3: string = "";
  private mensagemCard4: string = "";
  private fontCard4: string = "";
  private mensagemCard5: string = "";
  private fontCard5: string = "";
  private mensagemCard6: string = "";
  private fontCard6: string = "";
  private mensagemCard7: string = "";
  private fontCard7: string = "";
  private mensagemCard8: string = "";
  private fontCard8: string = "";
  private mensagemCard9: string = "";
  private fontCard9: string = "";
  private mensagemCard10: string = "";
  private fontCard10: string = "";
  private mensagemCard11: string = "";
  private fontCard11: string = "";
  private mensagemCard12: string = "";
  private fontCard12: string = "";
  private mensagemCard13: string = "";
  private fontCard13: string = "";
  private nameImgCard1: string = "ios-arrow-dropdown";
  private nameImgCard2: string = "ios-arrow-dropdown";
  private nameImgCard3: string = "ios-arrow-dropdown";
  private nameImgCard4: string = "ios-arrow-dropdown";
  private nameImgCard5: string = "ios-arrow-dropdown";
  private nameImgCard6: string = "ios-arrow-dropdown";
  private nameImgCard7: string = "ios-arrow-dropdown";
  private nameImgCard8: string = "ios-arrow-dropdown";
  private nameImgCard9: string = "ios-arrow-dropdown";
  private nameImgCard10: string = "ios-arrow-dropdown";
  private nameImgCard11: string = "ios-arrow-dropdown";
  private nameImgCard12: string = "ios-arrow-dropdown";
  private nameImgCard13: string = "ios-arrow-dropdown";
  imcPage = ImcPage;
  beePage = BeePage;
  eerPage = EerPage;
  hbPage = HbPage;
  pesoCorporeoImcPage = PesoCorporeoImcPage;
  pesoTeoricoPage = PesoTeoricoPage;
  pesoCorporalAntPage = PesoCorpAnt;
  calculoDoIdealPage = CalculoDoIdealPage;
  adequacaoDePesoPage = AdequacaoPesoPage;
  pesoAjustadoPage = PesoAjustadoPage;
  pesoParaIdososPage = PesoParaIdososPage;
  alturaParaIdososPage = AlturaParaIdososPage;
  pesoComposicaoPage = PesoComposicaoCorpPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setMensagemIMC() {
    if (this.mensagemAtiva){
      this.mensagemCard1 = "O Índice de Massa Corporal serve para avaliar o peso do indivíduo em relação à sua altura e assim indicar se está dentro do peso ideal, acima ou abaixo do peso desejado.";
      this.fontCard1 = "Fonte: OMS, 1995 e 1997.";
      this.nameImgCard1 = "ios-arrow-dropup";
    }
    else{
      this.mensagemCard1 = "";
      this.fontCard1 = "";
      this.nameImgCard1 = "ios-arrow-dropdown";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemBEE() {
    if (this.mensagemAtiva){
      this.mensagemCard2 = "O Gasto energético basal é a quantidade de energia utilizada pelo organismo para manter as funções vitais, como funcionamento dos órgãos.";
      this.nameImgCard2 = "ios-arrow-dropup";
      this.fontCard2 = "Fonte: IOM, 2002/2003.";
    }
    else{
      this.mensagemCard2 = "";
      this.nameImgCard2 = "ios-arrow-dropdown";
      this.fontCard2 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemEER() {
    if (this.mensagemAtiva){
      this.mensagemCard3 = "O Gasto Energético Total é a quantidade de energia, ou calorias, que uma pessoa precisa para garantir o bom desempenho de atividades físicas fundamentais, como respiração, circulação sanguínea, digestão de alimentos e atividades físicas.";
      this.nameImgCard3 = "ios-arrow-dropup";
      this.fontCard3 = "Fonte: IOM, 2002/2003.";
    }
    else{
      this.mensagemCard3 = "";
      this.nameImgCard3 = "ios-arrow-dropdown";
      this.fontCard3 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemHB() {
    if (this.mensagemAtiva){
      this.mensagemCard4 = "Necessidades energéticas para idosos e pessoas com patologias (doenças).";
      this.nameImgCard4 = "ios-arrow-dropup";
      this.fontCard4 = "Fonte: Harris & Benedict, 1919.";
    }
    else{
      this.mensagemCard4 = "";
      this.nameImgCard4 = "ios-arrow-dropdown";
      this.fontCard4 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoCorporeoImc() {
    if (this.mensagemAtiva){
      this.mensagemCard5 = "O IMC é usado em conjunto com o cálculo do peso corpóreo para se obter a medida ideal do paciente avaliado.";
      this.nameImgCard5 = "ios-arrow-dropup";
      this.fontCard5 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
    }
    else{
      this.mensagemCard5 = "";
      this.nameImgCard5 = "ios-arrow-dropdown";
      this.fontCard5 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoTeorico() {
    if (this.mensagemAtiva){
      this.mensagemCard6 = "O cálculo do peso teórico ou ideal também pode ser calculado pelo biótipo, levando em consideração a idade e a altura (cm).";
      this.nameImgCard6 = "ios-arrow-dropup";
      this.fontCard6 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
    }
    else{
      this.mensagemCard6 = "";
      this.nameImgCard6 = "ios-arrow-dropdown";
      this.fontCard6 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoCorpAnt() {
    if (this.mensagemAtiva){
      this.mensagemCard7 = "A antropometria é de grande interesse para os profissionais da saúde. Ela é uma das ferramentas que compõe as medidas corporais. É parte essencial da avaliação do estado nutricional.";
      this.nameImgCard7 = "ios-arrow-dropup";
      this.fontCard7 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
    }
    else{
      this.mensagemCard7 = "";
      this.nameImgCard7 = "ios-arrow-dropdown";
      this.fontCard7 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemCalcDoIdeal() {
    if (this.mensagemAtiva){
      this.mensagemCard8 = "Manter o peso ideal é importante para evitar complicações como obesidade e diabetes ou até mesmo a desnutrição, quando o indivíduo está muito abaixo do peso. IMC desejado (mulheres: 21; Homens: 22 e idosos: 24,5)";
      this.nameImgCard8 = "ios-arrow-dropup";
      this.fontCard8 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
    }
    else{
      this.mensagemCard8 = "";
      this.nameImgCard8 = "ios-arrow-dropdown";
      this.fontCard8 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemAdequacaoDePeso() {
    if (this.mensagemAtiva){
      this.mensagemCard9 = "Após a obtenção do peso ideal e do peso atual é realizada a adequação de peso. A adequação de peso indicará quanto adequado ou inadequado está o peso atual do indivíduo em relação ao peso ideal.";
      this.nameImgCard9 = "ios-arrow-dropup";
      this.fontCard9 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
    }
    else{
      this.mensagemCard9 = "";
      this.nameImgCard9 = "ios-arrow-dropdown";
      this.fontCard9 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoAjustado() {
    if (this.mensagemAtiva){
      this.mensagemCard10 = "	Toda	perda	ponderal	significativa deve	ter	sua	etiologia	investigada	e	algum	tipo	de	terapia	nutrologica	instituído. O peso ajustado se	trata	de	correção	do peso	quando este	for	inferior a 95% ou superior a 115%";
      this.nameImgCard10 = "ios-arrow-dropup";
      this.fontCard10 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
    }
    else{
      this.mensagemCard10 = "";
      this.nameImgCard10 = "ios-arrow-dropdown";
      this.fontCard10 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoParaIdosos() {
    if (this.mensagemAtiva){
      this.mensagemCard11 = "Pacientes idosos necessitam de métodos de avaliação nutricional alternativos pela impossibilidade de aferição do peso e da altura. Nesse caso, são utilizadas fórmulas de estimativa, como as propostas por Chumlea.";
      this.nameImgCard11 = "ios-arrow-dropup";
      this.fontCard11 = "Fonte: Chumlea, 1998.";
    }
    else{
      this.mensagemCard11 = "";
      this.nameImgCard11 = "ios-arrow-dropdown";
      this.fontCard11 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemAlturaParaIdosos() {
    if (this.mensagemAtiva){
      this.mensagemCard12 = "Pacientes idosos necessitam de métodos de avaliação nutricional alternativos pela impossibilidade de aferição do peso e da altura. Nesse caso, são utilizadas fórmulas de estimativa, como as propostas por Chumlea.";
      this.nameImgCard12 = "ios-arrow-dropup";
      this.fontCard12 = "Fonte: Chumlea, 1998.";
    }
    else{
      this.mensagemCard12 = "";
      this.nameImgCard12 = "ios-arrow-dropdown";
      this.fontCard12 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }

  setMensagemPesoCorp() {
    if (this.mensagemAtiva){
      this.mensagemCard13 = "Avaliando a composição corporal é possível identificar riscos à saúde relacionados à perda de massa magra e ao excesso ou escassez de gordura corpórea em indivíduos hospitalizados.";
      this.nameImgCard13 = "ios-arrow-dropup";
      this.fontCard13 = "Fonte: Chumlea, 1998.";
    }
    else{
      this.mensagemCard13 = "";
      this.nameImgCard13 = "ios-arrow-dropdown";
      this.fontCard13 = "";
    }
    this.mensagemAtiva = !this.mensagemAtiva;
  }
}
