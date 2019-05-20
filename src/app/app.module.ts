import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Splash } from '../pages/splash/splash';
import { Calculos } from '../pages/calculos/calculos';
import { ImcPage } from '../pages/imc-page/imc-page';
import { BeePage } from '../pages/bee-page/bee-page';
import { EerPage } from '../pages/eer-page/eer-page';
import { HbPage } from '../pages/hb-page/hb-page';
import { PesoCorporeoImcPage } from '../pages/peso-corporeo-imc-page/peso-corporeo-imc-page';
import { PesoTeoricoPage } from '../pages/peso-teorico-page/peso-teorico-page';
import { PesoCorpAnt } from '../pages/peso-corp-ant/peso-corp-ant';
import { CalculoDoIdealPage } from '../pages/calculo-do-ideal-page/calculo-do-ideal-page';
import { AdequacaoPesoPage } from '../pages/adequacao-peso-page/adequacao-peso-page';
import { PesoAjustadoPage } from '../pages/peso-ajustado-page/peso-ajustado-page';
import { PesoParaIdososPage } from '../pages/peso-para-idosos-page/peso-para-idosos-page';
import { AlturaParaIdososPage } from '../pages/altura-para-idosos-page/altura-para-idosos-page';
import { PesoComposicaoCorpPage } from '../pages/peso-composicao-corp-page/peso-composicao-corp-page';
import { GraficoPage } from '../pages/grafico-page/grafico-page';

import { IonicStorageModule } from '@ionic/storage';
import { Cadastro } from '../pages/cadastro/cadastro';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Splash,
    Calculos,
    ImcPage, 
    BeePage,
    EerPage,
    HbPage,
    PesoCorporeoImcPage,
    PesoTeoricoPage,
    PesoCorpAnt,
    CalculoDoIdealPage,
    AdequacaoPesoPage,
    PesoAjustadoPage,
    PesoParaIdososPage,
    AlturaParaIdososPage,
    PesoComposicaoCorpPage,
    GraficoPage,
    Cadastro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Splash,
    Calculos,
    ImcPage, 
    BeePage,
    EerPage,
    HbPage,
    PesoCorporeoImcPage,
    PesoTeoricoPage,
    PesoCorpAnt,
    CalculoDoIdealPage,
    AdequacaoPesoPage,
    PesoAjustadoPage,
    PesoParaIdososPage,
    AlturaParaIdososPage,
    PesoComposicaoCorpPage,
    GraficoPage,
    Cadastro
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
