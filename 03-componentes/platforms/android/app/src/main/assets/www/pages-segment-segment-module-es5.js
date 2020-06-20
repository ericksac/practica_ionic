(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segment-segment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/segment/segment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/segment/segment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Segment\"></app-header>\n\n<ion-toolbar>\n<!-- Default Segment -->\n<ion-segment (ionChange)=\"segmentChanged($event)\"\n              color=\"tertiary\">\n    <ion-segment-button value=\"todos\">\n      <ion-label>Todos</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"DC comics\">\n      <ion-label>DC Comics</ion-label>\n    </ion-segment-button>\n\n  <ion-segment-button value=\"Marvel comics\">\n      <ion-label>Marvel Comics</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-toolbar>\n\n\n<ion-content>\n\n <ion-list>\n    <ion-item *ngFor=\"let heroe of superHeroes | async | filtro: publisher: 'publisher'\">\n      <ion-label> <h3> {{ heroe.superhero }} <small> {{ heroe.alter_ego }} </small> </h3> \n      <p>\n        {{ heroe.first_appearence }}\n      </p>\n      </ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">\n        {{ heroe.publisher }}\n      </ion-label>\n    </ion-item>\n</ion-list> \n\n\n<ion-list *ngIf=\"(superHeroes | async ) === null\">\n  <ion-item *ngFor=\"let item of [1,1,1,1,1,1,1,1,1,1,1,1,1,1]\"\n            class=\"animated flash slow infinite\">\n    <ion-label> <h3>\n      <ion-skeleton-text width=\"70%\"></ion-skeleton-text>\n    </h3> \n    <p>\n      <ion-skeleton-text width=\"100%\"></ion-skeleton-text>\n    </p>\n  </ion-label>\n  <ion-label slot=\"end\" >\n    <ion-skeleton-text width=\"40px\"></ion-skeleton-text>\n  </ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/segment/segment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/segment/segment.module.ts ***!
  \*************************************************/
/*! exports provided: SegmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment.page */ "./src/app/pages/segment/segment.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]
    }
];
var SegmentPageModule = /** @class */ (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/segment/segment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/segment/segment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlZ21lbnQvc2VnbWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/segment/segment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/segment/segment.page.ts ***!
  \***********************************************/
/*! exports provided: SegmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPage", function() { return SegmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var SegmentPage = /** @class */ (function () {
    function SegmentPage(dataService) {
        this.dataService = dataService;
        this.publisher = '';
    }
    SegmentPage.prototype.ngOnInit = function () {
        this.segment.value = 'todos';
        this.superHeroes = this.dataService.getHeroes();
    };
    SegmentPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event.detail.value;
        if (valorSegmento === 'todos') {
            this.publisher = '';
            return;
        }
        this.publisher = valorSegmento;
        console.log(valorSegmento);
    };
    SegmentPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])
    ], SegmentPage.prototype, "segment", void 0);
    SegmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment',
            template: __webpack_require__(/*! raw-loader!./segment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/segment/segment.page.html"),
            styles: [__webpack_require__(/*! ./segment.page.scss */ "./src/app/pages/segment/segment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SegmentPage);
    return SegmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-segment-segment-module-es5.js.map