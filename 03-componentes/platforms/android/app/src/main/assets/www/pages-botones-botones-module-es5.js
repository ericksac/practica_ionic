(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/botones/botones.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Botones</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"primary\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<!--Botones normales-->\n\n<ion-button size=\"small\" expand=\"full\" >\n  Small\n</ion-button>\n<ion-button size=\"default\" expand=\"full\">\n  Default\n</ion-button>\n<ion-button  size=\"large\" expand=\"full\">\n  Large\n</ion-button>\n\n<!--Anchor-->\n<ion-button class= \"top-20\" expand=\"full\" routerLink=\"/alert\" color=\"tertiary\" >Anchor</ion-button>\n\n<!--ion row + ion-col-->\n<ion-row class=\"top-20\">\n  <ion-col>\n      <ion-button expand=\"full\" routerLink=\"/avatar\" color=\"tertiary\" >Avatar</ion-button>\n  </ion-col>\n  <ion-col>\n      <ion-button expand=\"full\" routerLink=\"/action-sheet\" color=\"tertiary\" >Action Sheet</ion-button>\n  </ion-col>\n</ion-row>\n\n\n<!--Fill-->\n<ion-button class=\"top-20\" fill=\"clear\">Clear</ion-button>\n<ion-button class=\"top-20\" fill=\"outline\">Outline</ion-button>\n<ion-button class=\"top-20\" fill=\"solid\">Solid</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/botones/botones.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");







var routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]
    }
];
var BotonesPageModule = /** @class */ (function () {
    function BotonesPageModule() {
    }
    BotonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
        })
    ], BotonesPageModule);
    return BotonesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/botones/botones.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-20 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWNrL0lvbmljLzAzLWNvbXBvbmVudGVzL3NyYy9hcHAvcGFnZXMvYm90b25lcy9ib3RvbmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm90b25lcy9ib3RvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib3RvbmVzL2JvdG9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iLCIudG9wLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/botones/botones.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonesPage = /** @class */ (function () {
    function BotonesPage() {
    }
    BotonesPage.prototype.ngOnInit = function () {
    };
    BotonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-botones',
            template: __webpack_require__(/*! raw-loader!./botones.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html"),
            styles: [__webpack_require__(/*! ./botones.page.scss */ "./src/app/pages/botones/botones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonesPage);
    return BotonesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module-es5.js.map