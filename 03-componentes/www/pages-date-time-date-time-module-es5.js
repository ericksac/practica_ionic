(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-date-time-date-time-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/date-time/date-time.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/date-time/date-time.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo= \"DateTime\">\n</app-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n\n    <ion-list-header>\n      <ion-label>Datos de nacimiento</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Fecha de nacimiento</ion-label>\n      <ion-datetime placeholder=\"Nacimiento\"\n                    display-format=\"YYYY MMMM DD\"\n                    cancelText=\"Cancelar!\"\n                    [ngModel]=\"fechaNaci.toISOString()\"\n                    (ionChange)=\"cambioFecha( $event )\"></ion-datetime>\n   </ion-item>\n\n\n   <ion-list-header>\n      <ion-label>Restricciones</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Min y Max</ion-label>\n      <ion-datetime placeholder=\"yyyy-mm-dd\"\n                    display-format=\"YYYY MMMM DD\"\n                    min=\"2015-01-01\"\n                    max =\"2015-12-31\">\n\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Años</ion-label>\n        <ion-datetime placeholder=\"YYYY\"\n                      display-format=\"YYYY\"\n                      min=\"2015\"\n                      max =\"2025\"\n                      value=\"2020\">\n  \n        </ion-datetime>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Custom date</ion-label>\n          <ion-datetime [pickerOptions]=\"customPickerOptions\"\n                        [(ngModel)]=\"customDate\">\n    \n          </ion-datetime>\n        </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.module.ts ***!
  \*****************************************************/
/*! exports provided: DateTimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function() { return DateTimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time.page */ "./src/app/pages/date-time/date-time.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]
    }
];
var DateTimePageModule = /** @class */ (function () {
    function DateTimePageModule() {
    }
    DateTimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
        })
    ], DateTimePageModule);
    return DateTimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.ts ***!
  \***************************************************/
/*! exports provided: DateTimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePage", function() { return DateTimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateTimePage = /** @class */ (function () {
    function DateTimePage() {
        this.fechaNaci = new Date();
    }
    DateTimePage.prototype.ngOnInit = function () {
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function (evento) {
                        console.log('Clicked Save!');
                        console.log(evento.day.value, evento.month.value, evento.year.value);
                    }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    };
    DateTimePage.prototype.cambioFecha = function (event) {
        console.log('Date', new Date(event.detail.value));
    };
    DateTimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-time',
            template: __webpack_require__(/*! raw-loader!./date-time.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/date-time/date-time.page.html"),
            styles: [__webpack_require__(/*! ./date-time.page.scss */ "./src/app/pages/date-time/date-time.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateTimePage);
    return DateTimePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-date-time-date-time-module-es5.js.map