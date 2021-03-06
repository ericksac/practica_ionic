(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-check-check-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/check/check.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/check/check.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Checkbox\"></app-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let check of data\"\n        (click)=\"onClick(check)\">\n            <ion-label>{{check.name}}</ion-label>\n            <ion-checkbox [(ngModel)]=\"check.selected\" [color]=\"check.name\"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/check/check.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.module.ts ***!
  \*********************************************/
/*! exports provided: CheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.page */ "./src/app/pages/check/check.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]
    }
];
var CheckPageModule = /** @class */ (function () {
    function CheckPageModule() {
    }
    CheckPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]]
        })
    ], CheckPageModule);
    return CheckPageModule;
}());



/***/ }),

/***/ "./src/app/pages/check/check.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrL2NoZWNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/check/check.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/check/check.page.ts ***!
  \*******************************************/
/*! exports provided: CheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPage", function() { return CheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckPage = /** @class */ (function () {
    function CheckPage() {
        this.data = [
            {
                name: 'primary',
                selected: false
            },
            {
                name: 'secondary',
                selected: true
            },
            {
                name: 'tertiary',
                selected: false
            },
            {
                name: 'success',
                selected: true
            }
        ];
    }
    CheckPage.prototype.ngOnInit = function () {
    };
    CheckPage.prototype.onClick = function (check) {
        console.log(check);
    };
    CheckPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check',
            template: __webpack_require__(/*! raw-loader!./check.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/check/check.page.html"),
            styles: [__webpack_require__(/*! ./check.page.scss */ "./src/app/pages/check/check.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckPage);
    return CheckPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-check-check-module-es5.js.map