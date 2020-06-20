(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-progress-bar-progress-bar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/progress-bar/progress-bar.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/progress-bar/progress-bar.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"ProgressBar Range\">\n\n</app-header>\n<ion-content>\n\n  <ion-progress-bar [value]=\"porcentaje\"></ion-progress-bar>\n\n  <ion-list>\n \n    <ion-item>\n  \n      <ion-range\n        min=\"1\" max=\"100\"\n        dualKnobs=\"true\" pin=\"true\"\n        step=\"1\"\n        value=\"0\"\n        color=\"tertiary\"\n        (ionChange)=\"cambioRango( $event )\">\n        <ion-label slot=\"start\">0</ion-label>\n        <ion-label slot=\"end\">100</ion-label>\n      </ion-range>\n  \n    </ion-item>    \n  \n  </ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/progress-bar/progress-bar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.module.ts ***!
  \***********************************************************/
/*! exports provided: ProgressBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageModule", function() { return ProgressBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar.page */ "./src/app/pages/progress-bar/progress-bar.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]
    }
];
let ProgressBarPageModule = class ProgressBarPageModule {
};
ProgressBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]]
    })
], ProgressBarPageModule);



/***/ }),

/***/ "./src/app/pages/progress-bar/progress-bar.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/progress-bar/progress-bar.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.page.ts ***!
  \*********************************************************/
/*! exports provided: ProgressBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPage", function() { return ProgressBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressBarPage = class ProgressBarPage {
    constructor() {
        this.porcentaje = 0.05;
    }
    ngOnInit() {
    }
    cambioRango(event) {
        console.log(event);
        this.porcentaje = event.detail.value.upper / 100;
    }
};
ProgressBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-bar',
        template: __webpack_require__(/*! raw-loader!./progress-bar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/progress-bar/progress-bar.page.html"),
        styles: [__webpack_require__(/*! ./progress-bar.page.scss */ "./src/app/pages/progress-bar/progress-bar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProgressBarPage);



/***/ })

}]);
//# sourceMappingURL=pages-progress-bar-progress-bar-module-es2015.js.map