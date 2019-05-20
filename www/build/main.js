webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cadastroPage = __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* Cadastro */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar  color="navBarColor">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <p text-center>\n      <img src="../assets/imgs/logoNutriClin.PNG">\n    </p>\n    <br>\n    <p style="font-size:18px" text-center>\n      CADASTRE UM NOVO PACIENTE NO BOTÃO ABAIXO OU CLIQUE PARA SELECIONAR UM PERFIL JÁ CADASTRADO\n    </p>\n  </div>\n  <button style="background-color:#00995D; position: absolute; left: 0%; right: 0%; bottom:0; width: 100%;" [navPush]="cadastroPage" ion-button >Pacientes</button>\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var GraficoPage = (function () {
    function GraficoPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    GraficoPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userSelecionado').then(function (val) {
                            _this.imc = val.imc;
                            // if(this.nums == null){
                            //   this.nums = new Array();
                            //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
                            //   this.nums.push(resultado);
                            // }
                            _this.lineChartIMC = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvasIMC.nativeElement, {
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
                                            data: _this.imc,
                                            spanGaps: false,
                                        }
                                    ]
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (val) {
                                _this.bee = val.bee;
                                // if(this.nums == null){
                                //   this.nums = new Array();
                                //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
                                //   this.nums.push(resultado);
                                // }
                                _this.lineChartBEE = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvasBEE.nativeElement, {
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
                                                data: _this.bee,
                                                spanGaps: false,
                                            }
                                        ]
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (val) {
                                _this.eer = val.eer;
                                // if(this.nums == null){
                                //   this.nums = new Array();
                                //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
                                //   this.nums.push(resultado);
                                // }
                                _this.lineChartEER = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvasEER.nativeElement, {
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
                                                data: _this.eer,
                                                spanGaps: false,
                                            }
                                        ]
                                    }
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (val) {
                                _this.nee = val.nee;
                                // if(this.nums == null){
                                //   this.nums = new Array();
                                //   let resultado = [1.0,10.0,100.0,500.0, 600.0, 700.0, 800.0, 900.0];
                                //   this.nums.push(resultado);
                                // }
                                _this.lineChartNEE = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.lineCanvasNEE.nativeElement, {
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
                                                data: _this.nee,
                                                spanGaps: false,
                                            }
                                        ]
                                    }
                                });
                            })];
                    case 4:
                        _a.sent();
                        if (refresher != 0)
                            refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    GraficoPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doRefresh(0);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graficoIMC'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvasIMC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graficoBEE'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvasBEE", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graficoEER'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvasEER", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graficoNEE'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvasNEE", void 0);
    GraficoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grafico-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/grafico-page/grafico-page.html"*/`<ion-header>\n  <ion-navbar  color="navBarColor">\n    <ion-title>\n      Histórico de evolução\n    </ion-title>\n  </ion-navbar>\n  <style>\n      h1 {\n          border: 1px solid #dddddd;\n          text-align: left;\n          padding: 8px;\n          font-size: 90%;\n          text-align: center;\n          background-color: #00C97A;\n          border-radius: 20%;\n      }\n  </style>\n</ion-header>\n \n<ion-content>\n \n    <ion-refresher (ionRefresh)="doRefresh($event);">\n      <ion-refresher-content>\n      </ion-refresher-content>    \n    </ion-refresher>\n    <ion-card>\n      <ion-card-header>\n        <h1 align="center"> Diagnóstico IMC </h1>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #graficoIMC></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <br>\n\n    <ion-card>\n      <ion-card-header>\n        <h1 align="center"> Gasto energético basal </h1>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #graficoBEE></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <br>\n\n    <ion-card>\n      <ion-card-header>\n        <h1 align="center"> Gasto energético basal </h1>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #graficoEER></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <br>\n\n    <ion-card>\n      <ion-card-header>\n        <h1 align="center"> Necessidades Energéticas Idosos </h1>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #graficoNEE></canvas>\n      </ion-card-content>\n    </ion-card> \n\n    <!-- <ion-card>\n      <ion-card-header>\n        <strong>Reta crescente</strong>\n        <hr>\n      </ion-card-header>\n      <ion-card-content>\n        Indica que houve um ganho de peso desde a ultima vez que registrou seus dados\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n       <strong> Reta decrescente </strong>\n       <hr>\n      </ion-card-header>\n      <ion-card-content>\n        Indica que houve uma perda de peso desde a ultima vez que registrou seus dados\n      </ion-card-content>\n    </ion-card> -->\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/grafico-page/grafico-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GraficoPage);
    return GraficoPage;
}());

//# sourceMappingURL=grafico-page.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculos_calculos__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grafico_page_grafico_page__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__grafico_page_grafico_page__["a" /* GraficoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__calculos_calculos__["a" /* Calculos */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cálculos" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Histórico" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Cadastro = (function () {
    function Cadastro(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.searchQuery = '';
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.initializeItems();
        this.usuarios = new Array();
    }
    Cadastro.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usuarios').then(function (val) {
            _this.usuarios = val;
            for (var _i = 0; _i < _this.usuarios.length; _i++) {
                var user = _this.usuarios[_i];
            }
        });
    };
    Cadastro.prototype.initializeItems = function () {
        var _this = this;
        this.storage.get('usuarios').then(function (val) {
            _this.items = val;
        });
    };
    Cadastro.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.storage.get('usuarios').then(function (result) {
                _this.usuarios = result;
                _this.items = _this.usuarios.filter(function (item) {
                    return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            });
        }
    };
    Cadastro.prototype.itemSelected = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alert.create({
                            title: "Paciente " + item.nome + " selecionado",
                            buttons: ["Ok"]
                        });
                        this.usuarios;
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (result) {
                                _this.userSelecionadoAntigo = result;
                            })];
                    case 1:
                        _a.sent();
                        for (i = 0; i < this.usuarios.length; i++) {
                            if (this.usuarios[i].nome == item.nome) {
                                this.userSelecionado = this.usuarios[i];
                            }
                        }
                        if (this.userSelecionadoAntigo) {
                            for (i = 0; i < this.usuarios.length; i++) {
                                if (this.usuarios[i].nome == this.userSelecionadoAntigo.nome) {
                                    this.usuarios[i] = this.userSelecionadoAntigo;
                                }
                            }
                        }
                        return [4 /*yield*/, this.storage.remove('usuarios')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('usuarios', this.usuarios)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', this.userSelecionado)];
                    case 4:
                        _a.sent();
                        alert.present();
                        this.navCtrl.push(this.homePage);
                        return [2 /*return*/];
                }
            });
        });
    };
    Cadastro.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.nome && this.telefone)) return [3 /*break*/, 3];
                        usuario = new Usuario(this.nome, this.telefone);
                        if (this.usuarios == null)
                            this.usuarios = new Array();
                        this.usuarios.push(usuario);
                        //salva dados no storage
                        return [4 /*yield*/, this.storage.set('usuarios', this.usuarios)];
                    case 1:
                        //salva dados no storage
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', usuario)];
                    case 2:
                        _a.sent();
                        alert_1 = this.alert.create({
                            title: "Salvo com sucesso!",
                            buttons: ["Ok"]
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 3:
                        alert_2 = this.alert.create({
                            title: "Preencha todos os campos!",
                            buttons: ["Ok"]
                        });
                        alert_2.present();
                        _a.label = 4;
                    case 4:
                        this.navCtrl.push(this.homePage);
                        return [2 /*return*/];
                }
            });
        });
    };
    Cadastro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/cadastro/cadastro.html"*/`<ion-header>\n\n  <ion-navbar color="navBarColor">\n    <ion-title>cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Telefone</ion-label>\n      <ion-input type="number" [(ngModel)]="telefone" name="telefone"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  \n  <div padding>\n    <p text-center>\n      <button style="background-color:#00995D;" ion-button color="secondary" (click) ="salvar()" round>Cadastrar Novo</button>\n    </p>  \n    </div>\n\n  <ion-searchbar placeholder="Procurar..." (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-scroll scrollY="true">\n      <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n          {{ item.nome }} - {{item.telefone}}\n        </button>  \n      </ion-list>\n    </ion-scroll>\n</ion-content>\n`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], Cadastro);
    return Cadastro;
}());

var Usuario = (function () {
    function Usuario(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
        this.imc = new Array();
        this.bee = new Array();
        this.eer = new Array();
        this.nee = new Array();
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getTelefone = function () {
        return this.telefone;
    };
    return Usuario;
}());
//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calculos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imc_page_imc_page__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bee_page_bee_page__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eer_page_eer_page__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hb_page_hb_page__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__peso_corporeo_imc_page_peso_corporeo_imc_page__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__peso_teorico_page_peso_teorico_page__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__peso_corp_ant_peso_corp_ant__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calculo_do_ideal_page_calculo_do_ideal_page__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adequacao_peso_page_adequacao_peso_page__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__peso_ajustado_page_peso_ajustado_page__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__peso_para_idosos_page_peso_para_idosos_page__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__altura_para_idosos_page_altura_para_idosos_page__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__peso_composicao_corp_page_peso_composicao_corp_page__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var Calculos = (function () {
    function Calculos(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mensagemAtiva = true;
        this.mensagemCard1 = "";
        this.fontCard1 = "";
        this.mensagemCard2 = "";
        this.fontCard2 = "";
        this.mensagemCard3 = "";
        this.fontCard3 = "";
        this.mensagemCard4 = "";
        this.fontCard4 = "";
        this.mensagemCard5 = "";
        this.fontCard5 = "";
        this.mensagemCard6 = "";
        this.fontCard6 = "";
        this.mensagemCard7 = "";
        this.fontCard7 = "";
        this.mensagemCard8 = "";
        this.fontCard8 = "";
        this.mensagemCard9 = "";
        this.fontCard9 = "";
        this.mensagemCard10 = "";
        this.fontCard10 = "";
        this.mensagemCard11 = "";
        this.fontCard11 = "";
        this.mensagemCard12 = "";
        this.fontCard12 = "";
        this.mensagemCard13 = "";
        this.fontCard13 = "";
        this.nameImgCard1 = "ios-arrow-dropdown";
        this.nameImgCard2 = "ios-arrow-dropdown";
        this.nameImgCard3 = "ios-arrow-dropdown";
        this.nameImgCard4 = "ios-arrow-dropdown";
        this.nameImgCard5 = "ios-arrow-dropdown";
        this.nameImgCard6 = "ios-arrow-dropdown";
        this.nameImgCard7 = "ios-arrow-dropdown";
        this.nameImgCard8 = "ios-arrow-dropdown";
        this.nameImgCard9 = "ios-arrow-dropdown";
        this.nameImgCard10 = "ios-arrow-dropdown";
        this.nameImgCard11 = "ios-arrow-dropdown";
        this.nameImgCard12 = "ios-arrow-dropdown";
        this.nameImgCard13 = "ios-arrow-dropdown";
        this.imcPage = __WEBPACK_IMPORTED_MODULE_2__imc_page_imc_page__["a" /* ImcPage */];
        this.beePage = __WEBPACK_IMPORTED_MODULE_3__bee_page_bee_page__["a" /* BeePage */];
        this.eerPage = __WEBPACK_IMPORTED_MODULE_4__eer_page_eer_page__["a" /* EerPage */];
        this.hbPage = __WEBPACK_IMPORTED_MODULE_5__hb_page_hb_page__["a" /* HbPage */];
        this.pesoCorporeoImcPage = __WEBPACK_IMPORTED_MODULE_6__peso_corporeo_imc_page_peso_corporeo_imc_page__["a" /* PesoCorporeoImcPage */];
        this.pesoTeoricoPage = __WEBPACK_IMPORTED_MODULE_7__peso_teorico_page_peso_teorico_page__["a" /* PesoTeoricoPage */];
        this.pesoCorporalAntPage = __WEBPACK_IMPORTED_MODULE_8__peso_corp_ant_peso_corp_ant__["a" /* PesoCorpAnt */];
        this.calculoDoIdealPage = __WEBPACK_IMPORTED_MODULE_9__calculo_do_ideal_page_calculo_do_ideal_page__["a" /* CalculoDoIdealPage */];
        this.adequacaoDePesoPage = __WEBPACK_IMPORTED_MODULE_10__adequacao_peso_page_adequacao_peso_page__["a" /* AdequacaoPesoPage */];
        this.pesoAjustadoPage = __WEBPACK_IMPORTED_MODULE_11__peso_ajustado_page_peso_ajustado_page__["a" /* PesoAjustadoPage */];
        this.pesoParaIdososPage = __WEBPACK_IMPORTED_MODULE_12__peso_para_idosos_page_peso_para_idosos_page__["a" /* PesoParaIdososPage */];
        this.alturaParaIdososPage = __WEBPACK_IMPORTED_MODULE_13__altura_para_idosos_page_altura_para_idosos_page__["a" /* AlturaParaIdososPage */];
        this.pesoComposicaoPage = __WEBPACK_IMPORTED_MODULE_14__peso_composicao_corp_page_peso_composicao_corp_page__["a" /* PesoComposicaoCorpPage */];
    }
    Calculos.prototype.setMensagemIMC = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard1 = "O Índice de Massa Corporal serve para avaliar o peso do indivíduo em relação à sua altura e assim indicar se está dentro do peso ideal, acima ou abaixo do peso desejado.";
            this.fontCard1 = "Fonte: OMS, 1995 e 1997.";
            this.nameImgCard1 = "ios-arrow-dropup";
        }
        else {
            this.mensagemCard1 = "";
            this.fontCard1 = "";
            this.nameImgCard1 = "ios-arrow-dropdown";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemBEE = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard2 = "O Gasto energético basal é a quantidade de energia utilizada pelo organismo para manter as funções vitais, como funcionamento dos órgãos.";
            this.nameImgCard2 = "ios-arrow-dropup";
            this.fontCard2 = "Fonte: IOM, 2002/2003.";
        }
        else {
            this.mensagemCard2 = "";
            this.nameImgCard2 = "ios-arrow-dropdown";
            this.fontCard2 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemEER = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard3 = "O Gasto Energético Total é a quantidade de energia, ou calorias, que uma pessoa precisa para garantir o bom desempenho de atividades físicas fundamentais, como respiração, circulação sanguínea, digestão de alimentos e atividades físicas.";
            this.nameImgCard3 = "ios-arrow-dropup";
            this.fontCard3 = "Fonte: IOM, 2002/2003.";
        }
        else {
            this.mensagemCard3 = "";
            this.nameImgCard3 = "ios-arrow-dropdown";
            this.fontCard3 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemHB = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard4 = "Necessidades energéticas para idosos e pessoas com patologias (doenças).";
            this.nameImgCard4 = "ios-arrow-dropup";
            this.fontCard4 = "Fonte: Harris & Benedict, 1919.";
        }
        else {
            this.mensagemCard4 = "";
            this.nameImgCard4 = "ios-arrow-dropdown";
            this.fontCard4 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoCorporeoImc = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard5 = "O IMC é usado em conjunto com o cálculo do peso corpóreo para se obter a medida ideal do paciente avaliado.";
            this.nameImgCard5 = "ios-arrow-dropup";
            this.fontCard5 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
        }
        else {
            this.mensagemCard5 = "";
            this.nameImgCard5 = "ios-arrow-dropdown";
            this.fontCard5 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoTeorico = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard6 = "O cálculo do peso teórico ou ideal também pode ser calculado pelo biótipo, levando em consideração a idade e a altura (cm).";
            this.nameImgCard6 = "ios-arrow-dropup";
            this.fontCard6 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
        }
        else {
            this.mensagemCard6 = "";
            this.nameImgCard6 = "ios-arrow-dropdown";
            this.fontCard6 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoCorpAnt = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard7 = "A antropometria é de grande interesse para os profissionais da saúde. Ela é uma das ferramentas que compõe as medidas corporais. É parte essencial da avaliação do estado nutricional.";
            this.nameImgCard7 = "ios-arrow-dropup";
            this.fontCard7 = "Fonte: WORLD, 1995 / CHUMLEA, 1985.";
        }
        else {
            this.mensagemCard7 = "";
            this.nameImgCard7 = "ios-arrow-dropdown";
            this.fontCard7 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemCalcDoIdeal = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard8 = "Manter o peso ideal é importante para evitar complicações como obesidade e diabetes ou até mesmo a desnutrição, quando o indivíduo está muito abaixo do peso. IMC desejado (mulheres: 21; Homens: 22 e idosos: 24,5)";
            this.nameImgCard8 = "ios-arrow-dropup";
            this.fontCard8 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
        }
        else {
            this.mensagemCard8 = "";
            this.nameImgCard8 = "ios-arrow-dropdown";
            this.fontCard8 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemAdequacaoDePeso = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard9 = "Após a obtenção do peso ideal e do peso atual é realizada a adequação de peso. A adequação de peso indicará quanto adequado ou inadequado está o peso atual do indivíduo em relação ao peso ideal.";
            this.nameImgCard9 = "ios-arrow-dropup";
            this.fontCard9 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
        }
        else {
            this.mensagemCard9 = "";
            this.nameImgCard9 = "ios-arrow-dropdown";
            this.fontCard9 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoAjustado = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard10 = "	Toda	perda	ponderal	significativa deve	ter	sua	etiologia	investigada	e	algum	tipo	de	terapia	nutrologica	instituído. O peso ajustado se	trata	de	correção	do peso	quando este	for	inferior a 95% ou superior a 115%";
            this.nameImgCard10 = "ios-arrow-dropup";
            this.fontCard10 = "Fonte: Blackburn, GL e Bistrian, BR, 1979.";
        }
        else {
            this.mensagemCard10 = "";
            this.nameImgCard10 = "ios-arrow-dropdown";
            this.fontCard10 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoParaIdosos = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard11 = "Pacientes idosos necessitam de métodos de avaliação nutricional alternativos pela impossibilidade de aferição do peso e da altura. Nesse caso, são utilizadas fórmulas de estimativa, como as propostas por Chumlea.";
            this.nameImgCard11 = "ios-arrow-dropup";
            this.fontCard11 = "Fonte: Chumlea, 1998.";
        }
        else {
            this.mensagemCard11 = "";
            this.nameImgCard11 = "ios-arrow-dropdown";
            this.fontCard11 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemAlturaParaIdosos = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard12 = "Pacientes idosos necessitam de métodos de avaliação nutricional alternativos pela impossibilidade de aferição do peso e da altura. Nesse caso, são utilizadas fórmulas de estimativa, como as propostas por Chumlea.";
            this.nameImgCard12 = "ios-arrow-dropup";
            this.fontCard12 = "Fonte: Chumlea, 1998.";
        }
        else {
            this.mensagemCard12 = "";
            this.nameImgCard12 = "ios-arrow-dropdown";
            this.fontCard12 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos.prototype.setMensagemPesoCorp = function () {
        if (this.mensagemAtiva) {
            this.mensagemCard13 = "Avaliando a composição corporal é possível identificar riscos à saúde relacionados à perda de massa magra e ao excesso ou escassez de gordura corpórea em indivíduos hospitalizados.";
            this.nameImgCard13 = "ios-arrow-dropup";
            this.fontCard13 = "Fonte: Chumlea, 1998.";
        }
        else {
            this.mensagemCard13 = "";
            this.nameImgCard13 = "ios-arrow-dropdown";
            this.fontCard13 = "";
        }
        this.mensagemAtiva = !this.mensagemAtiva;
    };
    Calculos = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculos',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/calculos/calculos.html"*/`<ion-header>\n  <ion-navbar color="navBarColor">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-card class="center" style="border-color:black; \n          background-color: white !important;\n          width: 50% !important;\n          height: 17% !important;\n          margin-top: 0% !important">\n    <img class="centerImg" src="../assets/imgs/listaImagem.png">\n  </ion-card>\n\n<ion-scroll scrollY="true" style="background-color:#e6e6e6 ">\n  <div style="margin-top:40%">\n    <ion-card style="border-color:black; background-color: #00995D !important">\n      <p text-center [navPush]="imcPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> IMC - Índice de massa corporal </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemIMC()" name={{nameImgCard1}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard1}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard1}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div>\n    <ion-card>\n      <p text-center [navPush]="beePage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> BEE - Gasto energético basal </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemBEE()" name={{nameImgCard2}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard2}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard2}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="border-color:black; background-color: #00995D !important">\n      <p text-center [navPush]="eerPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> EER - Gasto energético total </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemEER()" name={{nameImgCard3}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard3}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard3}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div>\n    <ion-card>\n      <p text-center [navPush]="hbPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> Necessidades energéticas </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemHB()" name={{nameImgCard4}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard4}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard4}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div>\n    <ion-card style="border-color:black; background-color: #00995D !important">\n      <p text-center [navPush]="pesoCorporeoImcPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> Calculo do peso corpóreo com base no IMC </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoCorporeoImc()" name={{nameImgCard5}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard5}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard5}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <p text-center text-center [navPush]="pesoTeoricoPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong> Calculo de peso teórico para adolescentes </strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoTeorico()" name={{nameImgCard6}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard6}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard6}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="border-color:black; background-color: #00995D !important">\n      <p text-center text-center [navPush]="pesoCorporalAntPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Peso corporal a partir de dados antropométricos</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoCorpAnt()" name={{nameImgCard7}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard7}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard7}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <div>\n    <ion-card>\n      <p text-center text-center [navPush]="calculoDoIdealPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Cálculo do ideal</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemCalcDoIdeal()" name={{nameImgCard8}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard8}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard8}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="border-color: black; background-color: #00995D !important">\n      <p text-center text-center [navPush]="adequacaoDePesoPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Adequação de peso (%)</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemAdequacaoDePeso()" name={{nameImgCard9}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard9}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard9}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-card>\n      <p text-center text-center [navPush]="pesoAjustadoPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Peso ajustado</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoAjustado()" name={{nameImgCard10}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard10}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard10}}\n        </p>\n      </ion-card-content>\n    </ion-card> -->\n  </div>\n\n  <div>\n    <ion-card style="border-color:black;">\n      <p text-center text-center [navPush]="pesoParaIdososPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Estimativa de peso para idosos</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoParaIdosos()" name={{nameImgCard11}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard11}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard11}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="border-color: black; background-color: #00995D !important">\n      <p text-center text-center [navPush]="alturaParaIdososPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Estimativa de altura para idosos</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemAlturaParaIdosos()" name={{nameImgCard12}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard12}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard12}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <div>\n    <ion-card >\n      <p text-center text-center [navPush]="pesoComposicaoPage" style="color:white; margin-left:10px;margin-top:10px; font-size:18px">\n        <strong>Estimativa de peso pela composição corporal</strong>\n      </p>\n      <hr>\n      <p style="margin-bottom:5px;margin-top:10px" text-center>\n        <ion-icon (click)="setMensagemPesoCorp()" name={{nameImgCard13}}></ion-icon>\n      </p>\n      <ion-card-content>\n        <p style="color:white;" text-center>\n          {{mensagemCard13}}\n        </p>\n        <br>\n        <p style="color:white;" text-center>\n          {{fontCard13}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-scroll>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/calculos/calculos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], Calculos);
    return Calculos;
}());

//# sourceMappingURL=calculos.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grafico_page_grafico_page__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ImcPage = (function () {
    function ImcPage(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.graficoPage = __WEBPACK_IMPORTED_MODULE_3__grafico_page_grafico_page__["a" /* GraficoPage */];
        this.nums = new Array();
    }
    ImcPage.prototype.calcular = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var resultado_1, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.altura && this.peso)) return [3 /*break*/, 4];
                        resultado_1 = (this.peso / (this.altura * this.altura));
                        if (resultado_1 < 16) {
                            this.classificacao = "Magreza grau 3";
                        }
                        else {
                            if (resultado_1 > 16 && resultado_1 < 16.9) {
                                this.classificacao = "Magreza grau 2";
                            }
                            else {
                                if (resultado_1 > 17 && resultado_1 < 18.4) {
                                    this.classificacao = "Magreza grau 1";
                                }
                                else {
                                    if (resultado_1 > 18.5 && resultado_1 < 24.9) {
                                        this.classificacao = "Eutrofia/Normal";
                                    }
                                    else {
                                        if (resultado_1 > 25 && resultado_1 < 29.9) {
                                            this.classificacao = "Pré obeso/sobrepeso";
                                        }
                                        else {
                                            if (resultado_1 > 30 && resultado_1 < 34.9) {
                                                this.classificacao = "Obesidade grau 1";
                                            }
                                            else {
                                                if (resultado_1 > 35 && resultado_1 < 39.9) {
                                                    this.classificacao = "Obesidade grau 2";
                                                }
                                                else {
                                                    if (resultado_1 > 40) {
                                                        this.classificacao = "Obesidade grau 3";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        alert_1 = this.alert.create({
                            title: this.classificacao,
                            subTitle: "IMC: " + resultado_1.toFixed(2),
                            buttons: ["Ok"]
                        });
                        alert_1.present();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (result) {
                                _this.userSelecionado = result;
                                _this.userSelecionado.imc.push(resultado_1.toFixed(2));
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove('userSelecionado')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', this.userSelecionado)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        alert_2 = this.alert.create({
                            title: "Preencha todos os campos!",
                            buttons: ["Ok"]
                        });
                        alert_2.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imc-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/imc-page/imc-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Índice de massa corporal</ion-title>\n  </ion-navbar>\n  <style>\n    table {\n        font-family: arial, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n    }\n    \n    td, th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n        font-size: 90%;\n    }\n    \n    tr:nth-child(even) {\n        background-color: #dddddd;\n    }\n    </style>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Peso atual (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="peso" name="peso"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Altura atual (m)</ion-label>\n      <ion-input type="number" [(ngModel)]="altura" name="altura"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p>\n      <button style="background-color:#00995D; position: absolute; right:absolute;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n      <!-- <button style="background-color:#00995D; position: absolute; right:0" (click)="salvar()" ion-button color="secondary" round>Salvar histórico</button> -->\n    </p>\n  </div>\n\n  <div style="padding-top: 80px; padding-left: 8px; padding-right: 8px">\n    <table>\n      <tr>\n        <th>IMC ( Kg/m2)</th>\n        <th>Classificação</th>\n        <th>Risco de co-morbidades</th>\n      </tr>\n      <tr>\n        <td> menor que 16,00</td>\n        <td>Magreza grau 3</td>\n        <td>-</td>\n      </tr>\n      <tr>\n        <td>16,00 – 16,9</td>\n        <td>Magreza grau 2</td>\n        <td>-</td>\n      </tr>\n      <tr>\n        <td>17,00 – 18,4</td>\n        <td>Magreza grau 1</td>\n        <td>-</td>\n      </tr>\n      <tr>\n        <td>18,5 – 24,9</td>\n        <td>Eutrofia/Normal</td>\n        <td>Médio</td>\n      </tr>\n      <tr>\n        <td>25,0 – 29,9</td>\n        <td>Pré obeso/sobrepeso</td>\n        <td>Aumentado</td>\n      </tr>\n      <tr>\n        <td>30,00 – 34,9</td>\n        <td>Obesidade grau 1</td>\n        <td>Moderado</td>\n      </tr>\n      <tr>\n        <td>35,0 – 39,9</td>\n        <td>Obesidade grau 2</td>\n        <td>Severo</td>\n      </tr>\n      <tr>\n        <td>maior que 40,00</td>\n        <td>Obesidade grau 3</td>\n        <td>Muito severo</td>\n      </tr>\n    </table>\n  </div>\n  <!-- <button style="background-color:#00995D; position: absolute; left: 0%; right: 0%; bottom:0; width: 100%;" [navPush]="graficoPage" ion-button color="blue">Gerar gráfico do histórico</button> -->\n  <!-- <button style="background-color:#00995D; position: absolute; left: 0%; right: 0%; bottom:0; width: 100%;" (click)="salvar()" ion-button color="blue">Salvar Resultado</button> -->\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/imc-page/imc-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ImcPage);
    return ImcPage;
}());

//# sourceMappingURL=imc-page.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BeePage = (function () {
    function BeePage(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.sexo = true;
    }
    BeePage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    BeePage.prototype.calcular = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var resultado_1, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.estatura && this.peso && this.idade)) return [3 /*break*/, 4];
                        if (this.sexo) {
                            resultado_1 = (204 - (4 * this.idade) + (450.5 * this.estatura) + (11.69 * this.peso));
                        }
                        else {
                            resultado_1 = (225 - (2.35 * this.idade) + (401.5 * this.estatura) + (9.39 * this.peso));
                        }
                        alert_1 = this.alert.create({
                            title: "Resultado",
                            subTitle: "Kcal/dia: " + resultado_1.toFixed(2),
                            buttons: ["Ok"]
                        });
                        alert_1.present();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (result) {
                                _this.userSelecionado = result;
                                _this.userSelecionado.bee.push(resultado_1.toFixed(2));
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove('userSelecionado')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', this.userSelecionado)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        alert_2 = this.alert.create({
                            title: "Preencha todos os campos!",
                            buttons: ["Ok"]
                        });
                        alert_2.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bee-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/bee-page/bee-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Gasto energético basal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Sexo\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homem</ion-label>\n        <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mulher</ion-label>\n        <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Idade</ion-label>\n      <ion-input type="number" [(ngModel)]="idade" name="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Estatura (m)</ion-label>\n      <ion-input type="number" [(ngModel)]="estatura" name="estatura"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Peso atual (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="peso" name="peso"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/bee-page/bee-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BeePage);
    return BeePage;
}());

//# sourceMappingURL=bee-page.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EerPage = (function () {
    function EerPage(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.sexo = true;
        this.sedentario = true;
    }
    EerPage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    EerPage.prototype.setSedentario = function () {
        this.sedentario = true;
        this.poucoAtivo = false;
        this.ativo = false;
        this.muitoAtivo = false;
    };
    EerPage.prototype.setPoucoAtivo = function () {
        this.sedentario = false;
        this.poucoAtivo = true;
        this.ativo = false;
        this.muitoAtivo = false;
    };
    EerPage.prototype.setAtivo = function () {
        this.sedentario = false;
        this.poucoAtivo = false;
        this.ativo = true;
        this.muitoAtivo = false;
    };
    EerPage.prototype.setMuitoAtivo = function () {
        this.sedentario = false;
        this.poucoAtivo = false;
        this.ativo = false;
        this.muitoAtivo = true;
    };
    EerPage.prototype.calcular = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pa, resultado_1, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.estatura && this.peso && this.idade)) return [3 /*break*/, 4];
                        pa = void 0;
                        if (this.sexo) {
                            if (this.sedentario)
                                pa = 1;
                            if (this.poucoAtivo)
                                pa = 1.11;
                            if (this.ativo)
                                pa = 1.25;
                            if (this.muitoAtivo)
                                pa = 1.48;
                            resultado_1 = (662 - (9.93 * this.idade) + (pa * (15.91 * this.peso)) + (539.6 * this.estatura));
                        }
                        else {
                            if (this.sedentario)
                                pa = 1;
                            if (this.poucoAtivo)
                                pa = 1.12;
                            if (this.ativo)
                                pa = 1.27;
                            if (this.muitoAtivo)
                                pa = 1.45;
                            resultado_1 = (354 - (6.91 * this.idade) + (pa * (9.36 * this.peso)) + (726 * this.estatura));
                        }
                        alert_1 = this.alert.create({
                            title: "Resultado",
                            subTitle: "Kcal: " + resultado_1.toFixed(2),
                            buttons: ["Ok"]
                        });
                        alert_1.present();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (result) {
                                _this.userSelecionado = result;
                                _this.userSelecionado.eer.push(resultado_1.toFixed(2));
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove('userSelecionado')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', this.userSelecionado)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        alert_2 = this.alert.create({
                            title: "Preencha todos os campos!",
                            buttons: ["Ok"]
                        });
                        alert_2.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eer-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/eer-page/eer-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Gasto energético total</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Sexo\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homem</ion-label>\n        <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mulher</ion-label>\n        <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Fator atividade física\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Sedentário</ion-label>\n        <ion-radio (click)="setSedentario()" checked="true" value="sedentario"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Pouco ativo</ion-label>\n        <ion-radio (click)="setPoucoAtivo()" value="poucoAtivo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Ativo</ion-label>\n        <ion-radio (click)="setAtivo()" value="ativo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Muito ativo</ion-label>\n        <ion-radio (click)="setMuitoAtivo()" value="muitoAtivo"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Idade</ion-label>\n      <ion-input type="number" [(ngModel)]="idade" name="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Estatura (m)</ion-label>\n      <ion-input type="number" [(ngModel)]="estatura" name="estatura"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Peso atual (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="peso" name="peso"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/eer-page/eer-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EerPage);
    return EerPage;
}());

//# sourceMappingURL=eer-page.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HbPage = (function () {
    function HbPage(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.sexo = true;
    }
    HbPage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    HbPage.prototype.calcular = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var resultado_1, alert_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.estatura && this.peso && this.idade)) return [3 /*break*/, 4];
                        if (this.sexo) {
                            resultado_1 = (66 + (13.7 * this.peso) + (5 * this.estatura) - (6.8 * this.idade));
                        }
                        else {
                            resultado_1 = (665 + (9.6 * this.peso) + (1.7 * this.estatura) - (4.7 * this.idade));
                        }
                        alert_1 = this.alert.create({
                            title: "Resultado",
                            subTitle: "Kcal: " + resultado_1.toFixed(2),
                            buttons: ["Ok"]
                        });
                        alert_1.present();
                        return [4 /*yield*/, this.storage.get('userSelecionado').then(function (result) {
                                _this.userSelecionado = result;
                                _this.userSelecionado.nee.push(resultado_1.toFixed(2));
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove('userSelecionado')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('userSelecionado', this.userSelecionado)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        alert_2 = this.alert.create({
                            title: "Preencha todos os campos!",
                            buttons: ["Ok"]
                        });
                        alert_2.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hb-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/hb-page/hb-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Necessidades energéticas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list radio-group>\n    <ion-list-header>\n      Sexo\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Homem</ion-label>\n      <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mulher</ion-label>\n      <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n    <ion-label floating>Idade</ion-label>\n    <ion-input type="number" [(ngModel)]="idade" name="idade"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Estatura (cm)</ion-label>\n    <ion-input type="number" [(ngModel)]="estatura" name="estatura"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Peso atual (kg)</ion-label>\n    <ion-input type="number" [(ngModel)]="peso" name="peso"></ion-input>\n  </ion-item>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/hb-page/hb-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HbPage);
    return HbPage;
}());

//# sourceMappingURL=hb-page.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoCorporeoImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoCorporeoImcPage = (function () {
    function PesoCorporeoImcPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    PesoCorporeoImcPage.prototype.calcular = function () {
        if (this.altura && this.imc) {
            var resultado = (this.altura * this.altura) * this.imc;
            resultado = resultado / 10000;
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado.toFixed(2) + " kg",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoCorporeoImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-corporeo-imc-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-corporeo-imc-page/peso-corporeo-imc-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title> Peso corpóreo com base no IMC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>IMC</ion-label>\n      <ion-input type="number" [(ngModel)]="imc" name = "imc"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Altura atual (m)</ion-label>\n      <ion-input type="number" [(ngModel)]="altura" name = "altura"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n\n  <div>\n    <p text-center>\n        <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round >Calcular</button>\n    </p>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-corporeo-imc-page/peso-corporeo-imc-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoCorporeoImcPage);
    return PesoCorporeoImcPage;
}());

//# sourceMappingURL=peso-corporeo-imc-page.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoTeoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoTeoricoPage = (function () {
    function PesoTeoricoPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    PesoTeoricoPage.prototype.calcular = function () {
        if (this.altura && this.idade) {
            var resultado = this.altura - 100 + this.idade / 10 * 0.9;
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado.toFixed(2) + " kg",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoTeoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-teorico-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-teorico-page/peso-teorico-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Peso Teorico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    \n    <ion-item>\n      <ion-label floating>Idade</ion-label>\n      <ion-input type="number" [(ngModel)]="idade" name="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Altura atual (cm)</ion-label>\n      <ion-input type="number" [(ngModel)]="altura" name="altura"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-teorico-page/peso-teorico-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoTeoricoPage);
    return PesoTeoricoPage;
}());

//# sourceMappingURL=peso-teorico-page.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoCorpAnt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoCorpAnt = (function () {
    function PesoCorpAnt(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.sexo = true;
    }
    PesoCorpAnt.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    PesoCorpAnt.prototype.calcular = function () {
        if (this.alturaJ && this.circunferenciaB && this.circunferenciaP && this.prega) {
            var resultado = void 0;
            if (this.sexo) {
                resultado = ((1.27 * this.circunferenciaP) + (0.87 * this.alturaJ) + (0.998 * this.circunferenciaB) + (0.4 * this.prega) - 62.35);
            }
            else {
                resultado = ((0.98 * this.circunferenciaP) + (1.16 * this.alturaJ) + (1.73 * this.circunferenciaB) + (0.37 * this.prega) - 81.69);
            }
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado.toFixed(2) + " Kg",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoCorpAnt = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-corp-ant',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-corp-ant/peso-corp-ant.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Peso corporal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Sexo\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homem</ion-label>\n        <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mulher</ion-label>\n        <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Altura do joelho</ion-label>\n      <ion-input type="number" [(ngModel)]="alturaJ" name="alturaJ"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Circunferência da panturrilha</ion-label>\n      <ion-input type="number" [(ngModel)]="circunferenciaP" name="circunferenciaP"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Circunferência do braço</ion-label>\n      <ion-input type="number" [(ngModel)]="circunferenciaB" name="circunferenciaB"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Prega cutânea sub escapular</ion-label>\n      <ion-input type="number" [(ngModel)]="prega" name="prega"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-corp-ant/peso-corp-ant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoCorpAnt);
    return PesoCorpAnt;
}());

//# sourceMappingURL=peso-corp-ant.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculoDoIdealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculoDoIdealPage = (function () {
    function CalculoDoIdealPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    CalculoDoIdealPage.prototype.calcular = function () {
        if (this.estatura && this.imcDesejado) {
            var resultado = this.imcDesejado * (this.estatura * this.estatura);
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado.toFixed(2) + "Kg",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    CalculoDoIdealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculo-do-ideal-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/calculo-do-ideal-page/calculo-do-ideal-page.html"*/`<ion-header>\n\n    <ion-navbar  color="navBarColor">\n      <ion-title>Cálculo do ideal</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-list>\n  \n      <ion-item>\n        <ion-label floating>IMC desejado</ion-label>\n        <ion-input type="number" [(ngModel)]="imcDesejado" name = "imcDesejado"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Estatura (cm)</ion-label>\n        <ion-input type="number" [(ngModel)]="estatura" name = "estatura"></ion-input>\n      </ion-item>\n    \n    </ion-list>\n  \n    <div>\n      <p text-center>\n          <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round >Calcular</button>\n      </p>\n    </div>\n  \n  </ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/calculo-do-ideal-page/calculo-do-ideal-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], CalculoDoIdealPage);
    return CalculoDoIdealPage;
}());

//# sourceMappingURL=calculo-do-ideal-page.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdequacaoPesoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdequacaoPesoPage = (function () {
    function AdequacaoPesoPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    AdequacaoPesoPage.prototype.calcular = function () {
        if (this.pesoA && this.pesoI) {
            var resultado = this.pesoA * 100 / this.pesoI;
            if (resultado < 70) {
                this.classificacao = "Desnutrição grave";
            }
            else {
                if (resultado > 70.1 && resultado < 80) {
                    this.classificacao = "Desnutrição moderada";
                }
                else {
                    if (resultado > 80.1 && resultado < 90) {
                        this.classificacao = "Desnutrição leve";
                    }
                    else {
                        if (resultado > 90.1 && resultado < 110) {
                            this.classificacao = "Eutrofia";
                        }
                        else {
                            if (resultado > 110.1 && resultado < 120) {
                                this.classificacao = "Sobrepeso";
                            }
                            else {
                                if (resultado > 120) {
                                    this.classificacao = "Obesidade";
                                }
                            }
                        }
                    }
                }
            }
            var alert_1 = this.alert.create({
                title: this.classificacao,
                subTitle: "Adequação: " + resultado.toFixed(2),
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    AdequacaoPesoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adequacao-peso-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/adequacao-peso-page/adequacao-peso-page.html"*/`<ion-header>\n\n    <ion-navbar  color="navBarColor">\n      <ion-title>Adequação de peso</ion-title>\n    </ion-navbar>\n    <style>\n      table {\n          font-family: arial, sans-serif;\n          border-collapse: collapse;\n          width: 100%;\n      }\n      \n      td, th {\n          border: 1px solid #dddddd;\n          text-align: left;\n          padding: 8px;\n          font-size: 90%;\n      }\n      \n      tr:nth-child(even) {\n          background-color: #dddddd;\n      }\n      </style>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-list>\n  \n      <ion-item>\n        <ion-label floating>Peso atual (kg)</ion-label>\n        <ion-input type="number" [(ngModel)]="pesoA" name = "pesoA"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Peso ideal (kg)</ion-label>\n        <ion-input type="number" [(ngModel)]="pesoI" name = "pesoI"></ion-input>\n      </ion-item>\n    \n    </ion-list>\n  \n    <div>\n      <p text-center>\n          <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round >Calcular</button>\n      </p>\n    </div>\n\n    <div style="padding-top: 80px; padding-left: 8px; padding-right: 8px">\n      <table>\n        <tr>\n          <th>Adequação de peso (%)</th>\n          <th>Estado nutricional</th>\n        </tr>\n        <tr>\n          <td> menor que 70</td>\n          <td>Desnutrição grave</td>\n        </tr>\n        <tr>\n          <td>16,00 – 16,9</td>\n          <td>Magreza grau 2</td>\n        </tr>\n        <tr>\n          <td>70,1 a 80</td>\n          <td>Desnutrição moderada</td>\n        </tr>\n        <tr>\n          <td>80,1 a 90</td>\n          <td>Desnutrição leve</td>\n        </tr>\n        <tr>\n          <td>90,1 a 110</td>\n          <td>Eutrofia</td>\n        </tr>\n        <tr>\n          <td>110,1 a 120</td>\n          <td>Sobrepeso</td>\n        </tr>\n        <tr>\n          <td>maior que 120</td>\n          <td>Obesidade</td>\n        </tr>\n      </table>\n    </div>\n  \n  </ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/adequacao-peso-page/adequacao-peso-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], AdequacaoPesoPage);
    return AdequacaoPesoPage;
}());

//# sourceMappingURL=adequacao-peso-page.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoAjustadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoAjustadoPage = (function () {
    function PesoAjustadoPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    PesoAjustadoPage.prototype.calcular = function () {
        if (this.pesoA && this.pesoI) {
            var resultado = (this.pesoI - this.pesoA) * 0.25 + this.pesoA;
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado,
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoAjustadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-ajustado-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-ajustado-page/peso-ajustado-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Peso ajustado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Peso atual (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="pesoA" name = "pesoA"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Peso ideal (kg)</ion-label>\n      <ion-input type="number" [(ngModel)]="pesoI" name = "pesoI"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n\n  <div>\n    <p text-center>\n        <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round >Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-ajustado-page/peso-ajustado-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoAjustadoPage);
    return PesoAjustadoPage;
}());

//# sourceMappingURL=peso-ajustado-page.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoParaIdososPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoParaIdososPage = (function () {
    function PesoParaIdososPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.cor = true;
        this.sexo = true;
    }
    PesoParaIdososPage.prototype.setCor = function () {
        this.cor = !this.cor;
    };
    PesoParaIdososPage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    PesoParaIdososPage.prototype.calcular = function () {
        if (this.circunferenciaB && this.alturaJ) {
            var resultado = void 0;
            if (this.sexo) {
                if (this.cor) {
                    resultado = (this.alturaJ * 0.44) + (this.circunferenciaB * 2.86) - 39.21;
                }
                else {
                    resultado = (this.alturaJ * 1.1) + (this.circunferenciaB * 3.07) - 75.81;
                }
            }
            else {
                if (this.cor) {
                    resultado = (this.alturaJ * 1.5) + (this.circunferenciaB * 2.58) - 84.22;
                }
                else {
                    resultado = (this.alturaJ * 1.09) + (this.circunferenciaB * 2.68) - 65.51;
                }
            }
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Peso: " + resultado.toFixed(2) + "Kg",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoParaIdososPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-para-idosos-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-para-idosos-page/peso-para-idosos-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Peso para idosos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Sexo\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homem</ion-label>\n        <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mulher</ion-label>\n        <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Cor da pele\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Branco</ion-label>\n        <ion-radio (click)="setCor()" checked="true" value="branco"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Negro</ion-label>\n        <ion-radio (click)="setCor()" value="negro"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Altura do joelho</ion-label>\n      <ion-input type="number" [(ngModel)]="alturaJ" name="alturaJ"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Circunferência do braço</ion-label>\n      <ion-input type="number" [(ngModel)]="circunferenciaB" name="circunferenciaB"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-para-idosos-page/peso-para-idosos-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoParaIdososPage);
    return PesoParaIdososPage;
}());

//# sourceMappingURL=peso-para-idosos-page.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlturaParaIdososPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlturaParaIdososPage = (function () {
    function AlturaParaIdososPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.cor = true;
        this.sexo = true;
    }
    AlturaParaIdososPage.prototype.setCor = function () {
        this.cor = !this.cor;
    };
    AlturaParaIdososPage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    AlturaParaIdososPage.prototype.calcular = function () {
        if (this.idade && this.alturaJ) {
            var resultado = void 0;
            if (this.sexo) {
                if (this.cor) {
                    resultado = 59.01 + (2.08 * this.alturaJ);
                }
                else {
                    resultado = 95.79 + (1.37 * this.alturaJ);
                }
            }
            else {
                if (this.cor) {
                    resultado = 75 + (1.91 * this.alturaJ) - (0.17 * this.idade);
                }
                else {
                    resultado = 58.72 + (1.96 * this.alturaJ);
                }
            }
            var alert_1 = this.alert.create({
                title: "Resultado",
                subTitle: "Altura: " + resultado.toFixed(0) + " cm",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    AlturaParaIdososPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-altura-para-idosos-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/altura-para-idosos-page/altura-para-idosos-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Altura para idosos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Sexo\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homem</ion-label>\n        <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mulher</ion-label>\n        <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list radio-group>\n      <ion-list-header>\n        Cor da pele\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Branco</ion-label>\n        <ion-radio (click)="setCor()" checked="true" value="branco"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Negro</ion-label>\n        <ion-radio (click)="setCor()" value="negro"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Altura do joelho</ion-label>\n      <ion-input type="number" [(ngModel)]="alturaJ" name="alturaJ"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Idade</ion-label>\n      <ion-input type="number" [(ngModel)]="idade" name="idade"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/altura-para-idosos-page/altura-para-idosos-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], AlturaParaIdososPage);
    return AlturaParaIdososPage;
}());

//# sourceMappingURL=altura-para-idosos-page.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesoComposicaoCorpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesoComposicaoCorpPage = (function () {
    function PesoComposicaoCorpPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.sexo = true;
    }
    PesoComposicaoCorpPage.prototype.setSexo = function () {
        this.sexo = !this.sexo;
    };
    PesoComposicaoCorpPage.prototype.calcular = function () {
        if (this.circunferenciaP && this.altura) {
            var complecao = void 0;
            var resultado = this.altura / this.circunferenciaP;
            if (this.sexo) {
                if (resultado < 9.6) {
                    complecao = "Grande";
                }
                else {
                    if (resultado >= 9.6 && resultado < 10.4) {
                        complecao = "Media";
                    }
                    else {
                        complecao = "Pequena";
                    }
                }
            }
            else {
                if (resultado < 10.1) {
                    complecao = "Grande";
                }
                else {
                    if (resultado >= 10.1 && resultado < 11) {
                        complecao = "Media";
                    }
                    else {
                        complecao = "Pequena";
                    }
                }
            }
            var alert_1 = this.alert.create({
                title: "Compleção corporal: " + complecao,
                subTitle: resultado.toFixed(2),
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: "Preencha todos os campos!",
                buttons: ["Ok"]
            });
            alert_2.present();
        }
    };
    PesoComposicaoCorpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peso-composicao-corp-page',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-composicao-corp-page/peso-composicao-corp-page.html"*/`<ion-header>\n\n  <ion-navbar  color="navBarColor">\n    <ion-title>Peso pela composição corporal</ion-title>\n  </ion-navbar>\n  <style>\n    table {\n        font-family: arial, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n    }\n    \n    td, th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n        font-size: 90%;\n    }\n    \n    tr:nth-child(even) {\n        background-color: #dddddd;\n    }\n    </style>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list radio-group>\n    <ion-list-header>\n      Sexo\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Homem</ion-label>\n      <ion-radio (click)="setSexo()" checked="true" value="homem"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mulher</ion-label>\n      <ion-radio (click)="setSexo()" value="mulher"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Altura atual (cm)</ion-label>\n      <ion-input type="number" [(ngModel)]="altura" name="altura"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Circunferência do pulso</ion-label>\n      <ion-input type="number" [(ngModel)]="circunferenciaP" name="circunferenciaP"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n    <p text-center>\n      <button style="background-color:#00995D;" (click)="calcular()" ion-button color="secondary" round>Calcular</button>\n    </p>\n  </div>\n\n  <div style="padding-top: 60px; padding-left: 8px; padding-right: 8px">\n    <h1 style="font-size: 120%" align="center">Compleção corporal</h1>\n    <table>\n      <tr>\n        <th></th>\n        <th>Grande</th>\n        <th>Média</th>\n        <th>Pequena</th>\n      </tr>\n      <tr>\n        <td> Homens</td>\n        <td> menor que 9,6 </td>\n        <td> 9,6 - 10,4</td>\n        <td> maior que 10,4</td>\n      </tr>\n      <tr>\n        <td> Homens</td>\n        <td> menor que 9,6 </td>\n        <td> 9,6 - 10,4</td>\n        <td> maior que 10,4</td>\n      </tr>\n    </table>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/peso-composicao-corp-page/peso-composicao-corp-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PesoComposicaoCorpPage);
    return PesoComposicaoCorpPage;
}());

//# sourceMappingURL=peso-composicao-corp-page.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 1000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/splash/splash.html"*/`<ion-header>\n  \n</ion-header>\n\n<ion-content padding>\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n      <style>\n        .cls-1 {\n          fill: #dd238c;\n        }\n\n        .cls-2 {\n          fill: #488aff;\n        }\n\n        .cls-3 {\n          fill: #7dd0df;\n        }\n\n        .cls-4 {\n          fill: #66c521;\n        }\n\n        .cls-5 {\n          fill: #282828;\n        }\n      </style>\n    </defs>\n    <title>jmlogo</title>\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78" />\n    <rect class="cls-2" y="4" width="20.06" height="163.78" />\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78" />\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78" />\n  </svg>\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calculos_calculos__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_imc_page_imc_page__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bee_page_bee_page__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_eer_page_eer_page__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hb_page_hb_page__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_peso_corporeo_imc_page_peso_corporeo_imc_page__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_peso_teorico_page_peso_teorico_page__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_peso_corp_ant_peso_corp_ant__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_calculo_do_ideal_page_calculo_do_ideal_page__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_adequacao_peso_page_adequacao_peso_page__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_peso_ajustado_page_peso_ajustado_page__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_peso_para_idosos_page_peso_para_idosos_page__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_altura_para_idosos_page_altura_para_idosos_page__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_peso_composicao_corp_page_peso_composicao_corp_page__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_grafico_page_grafico_page__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_cadastro__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_10__pages_calculos_calculos__["a" /* Calculos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_imc_page_imc_page__["a" /* ImcPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bee_page_bee_page__["a" /* BeePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_eer_page_eer_page__["a" /* EerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hb_page_hb_page__["a" /* HbPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_peso_corporeo_imc_page_peso_corporeo_imc_page__["a" /* PesoCorporeoImcPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_peso_teorico_page_peso_teorico_page__["a" /* PesoTeoricoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_peso_corp_ant_peso_corp_ant__["a" /* PesoCorpAnt */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calculo_do_ideal_page_calculo_do_ideal_page__["a" /* CalculoDoIdealPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_adequacao_peso_page_adequacao_peso_page__["a" /* AdequacaoPesoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_peso_ajustado_page_peso_ajustado_page__["a" /* PesoAjustadoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peso_para_idosos_page_peso_para_idosos_page__["a" /* PesoParaIdososPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_altura_para_idosos_page_altura_para_idosos_page__["a" /* AlturaParaIdososPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_peso_composicao_corp_page_peso_composicao_corp_page__["a" /* PesoComposicaoCorpPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_grafico_page_grafico_page__["a" /* GraficoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_cadastro__["a" /* Cadastro */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_10__pages_calculos_calculos__["a" /* Calculos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_imc_page_imc_page__["a" /* ImcPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bee_page_bee_page__["a" /* BeePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_eer_page_eer_page__["a" /* EerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hb_page_hb_page__["a" /* HbPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_peso_corporeo_imc_page_peso_corporeo_imc_page__["a" /* PesoCorporeoImcPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_peso_teorico_page_peso_teorico_page__["a" /* PesoTeoricoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_peso_corp_ant_peso_corp_ant__["a" /* PesoCorpAnt */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calculo_do_ideal_page_calculo_do_ideal_page__["a" /* CalculoDoIdealPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_adequacao_peso_page_adequacao_peso_page__["a" /* AdequacaoPesoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_peso_ajustado_page_peso_ajustado_page__["a" /* PesoAjustadoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_peso_para_idosos_page_peso_para_idosos_page__["a" /* PesoParaIdososPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_altura_para_idosos_page_altura_para_idosos_page__["a" /* AlturaParaIdososPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_peso_composicao_corp_page_peso_composicao_corp_page__["a" /* PesoComposicaoCorpPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_grafico_page_grafico_page__["a" /* GraficoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_cadastro__["a" /* Cadastro */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 244,
	"./es-do": 245,
	"./es-do.js": 245,
	"./es.js": 244,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mr": 282,
	"./mr.js": 282,
	"./ms": 283,
	"./ms-my": 284,
	"./ms-my.js": 284,
	"./ms.js": 283,
	"./my": 285,
	"./my.js": 285,
	"./nb": 286,
	"./nb.js": 286,
	"./ne": 287,
	"./ne.js": 287,
	"./nl": 288,
	"./nl-be": 289,
	"./nl-be.js": 289,
	"./nl.js": 288,
	"./nn": 290,
	"./nn.js": 290,
	"./pa-in": 291,
	"./pa-in.js": 291,
	"./pl": 292,
	"./pl.js": 292,
	"./pt": 293,
	"./pt-br": 294,
	"./pt-br.js": 294,
	"./pt.js": 293,
	"./ro": 295,
	"./ro.js": 295,
	"./ru": 296,
	"./ru.js": 296,
	"./sd": 297,
	"./sd.js": 297,
	"./se": 298,
	"./se.js": 298,
	"./si": 299,
	"./si.js": 299,
	"./sk": 300,
	"./sk.js": 300,
	"./sl": 301,
	"./sl.js": 301,
	"./sq": 302,
	"./sq.js": 302,
	"./sr": 303,
	"./sr-cyrl": 304,
	"./sr-cyrl.js": 304,
	"./sr.js": 303,
	"./ss": 305,
	"./ss.js": 305,
	"./sv": 306,
	"./sv.js": 306,
	"./sw": 307,
	"./sw.js": 307,
	"./ta": 308,
	"./ta.js": 308,
	"./te": 309,
	"./te.js": 309,
	"./tet": 310,
	"./tet.js": 310,
	"./th": 311,
	"./th.js": 311,
	"./tl-ph": 312,
	"./tl-ph.js": 312,
	"./tlh": 313,
	"./tlh.js": 313,
	"./tr": 314,
	"./tr.js": 314,
	"./tzl": 315,
	"./tzl.js": 315,
	"./tzm": 316,
	"./tzm-latn": 317,
	"./tzm-latn.js": 317,
	"./tzm.js": 316,
	"./uk": 318,
	"./uk.js": 318,
	"./ur": 319,
	"./ur.js": 319,
	"./uz": 320,
	"./uz-latn": 321,
	"./uz-latn.js": 321,
	"./uz.js": 320,
	"./vi": 322,
	"./vi.js": 322,
	"./x-pseudo": 323,
	"./x-pseudo.js": 323,
	"./yo": 324,
	"./yo.js": 324,
	"./zh-cn": 325,
	"./zh-cn.js": 325,
	"./zh-hk": 326,
	"./zh-hk.js": 326,
	"./zh-tw": 327,
	"./zh-tw.js": 327
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 450;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar  color="navBarColor">\n    <ion-title>\n      Resultados\n    </ion-title>\n  </ion-navbar>\n  <style>\n    table {\n        font-family: arial, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n    }\n    \n    td, th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n    }\n    \n    tr:nth-child(even) {\n        background-color: #dddddd;\n    }\n    </style>\n</ion-header>\n\n<ion-content padding>\n<div>\n    <p style="font-size:50px" text-center ><strong>NutriClin</strong></p>\n</div>\n<div style="padding-top: 100px">\n  <h2>IMC: Peso atual (kg)/ Altura2 (m)</h2>\n\n  <table>\n    <tr>\n      <th>IMC ( Kg/m2)</th>\n      <th>Classificação</th>\n      <th>Risco de co-morbidades</th>\n    </tr>\n    <tr>\n      <td> menor que 16,00</td>\n      <td>Magreza grau 3</td>\n      <td>-</td>\n    </tr>\n    <tr>\n      <td>16,00 – 16,9</td>\n      <td>Magreza grau 2</td>\n      <td>-</td>\n    </tr>\n    <tr>\n      <td>17,00 – 18,4</td>\n      <td>Magreza grau 1</td>\n      <td>-</td>\n    </tr>\n    <tr>\n      <td>18,5 – 24,9</td>\n      <td>Eutrofia/Normal</td>\n      <td>Médio</td>\n    </tr>\n    <tr>\n      <td>25,0 – 29,9</td>\n      <td>Pré obeso/sobrepeso</td>\n      <td>Aumentado</td>\n    </tr>\n    <tr>\n      <td>30,00 – 34,9</td>\n      <td>Obesidade grau 1</td>\n      <td>Moderado</td>\n    </tr>\n    <tr>\n      <td>35,0 – 39,9</td>\n      <td>Obesidade grau 2</td>\n      <td>Severo</td>\n    </tr>\n    <tr>\n      <td>maior que 40,00</td>\n      <td>Obesidade grau 3</td>\n      <td>Muito severo</td>\n    </tr>\n  </table>\n</div>\n\n<div style="padding-top: 50px">\n  <h2>Adequação de peso (%) = peso atual x 100/peso ideal.</h2>\n\n  <table>\n    <tr>\n      <th>Adequação de peso (%)</th>\n      <th>Estado nutricional</th>\n    </tr>\n    <tr>\n      <td> menor que 70</td>\n      <td>Desnutrição grave</td>\n    </tr>\n    <tr>\n      <td>16,00 – 16,9</td>\n      <td>Magreza grau 2</td>\n    </tr>\n    <tr>\n      <td>70,1 a 80</td>\n      <td>Desnutrição moderada</td>\n    </tr>\n    <tr>\n      <td>80,1 a 90</td>\n      <td>Desnutrição leve</td>\n    </tr>\n    <tr>\n      <td>90,1 a 110</td>\n      <td>Eutrofia</td>\n    </tr>\n    <tr>\n      <td>110,1 a 120</td>\n      <td>Sobrepeso</td>\n    </tr>\n    <tr>\n      <td>maior que 120</td>\n      <td>Obesidade</td>\n    </tr>\n  </table>\n</div>\n</ion-content>`/*ion-inline-end:"/home/otavio/Documents/TCC2/Nutriclin/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map