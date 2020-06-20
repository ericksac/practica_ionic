(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchbar-searchbar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/searchbar/searchbar.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/searchbar/searchbar.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Searchbar</ion-title>\n  </ion-toolbar>\n\n\n<ion-searchbar placeholder=\"Filter Pizza\" \n                type=\"decimal\" \n                (ionChange)=\"buscar($event)\" \n                [debounce]=\"250\"></ion-searchbar>\n\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n<ion-list>\n   <ion-item *ngFor=\"let album of albumes | filtro: textoBuscar : 'title'\" >\n     <ion-label> {{ album.title }} </ion-label>\n   </ion-item>\n</ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function() { return SearchbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/searchbar/searchbar.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]
    }
];
let SearchbarPageModule = class SearchbarPageModule {
};
SearchbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
    })
], SearchbarPageModule);



/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaGJhci9zZWFyY2hiYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.ts ***!
  \***************************************************/
/*! exports provided: SearchbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function() { return SearchbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



let SearchbarPage = class SearchbarPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.textoBuscar = '';
        this.albumes = [];
    }
    ngOnInit() {
        this.dataService.getAlbumes().subscribe(albumes => {
            console.log(albumes);
            this.albumes = albumes;
        });
    }
    buscar(event) {
        // console.log(event);
        this.textoBuscar = event.detail.value;
    }
};
SearchbarPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SearchbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: __webpack_require__(/*! raw-loader!./searchbar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/searchbar/searchbar.page.html"),
        styles: [__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/pages/searchbar/searchbar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], SearchbarPage);



/***/ })

}]);
//# sourceMappingURL=pages-searchbar-searchbar-module-es2015.js.map