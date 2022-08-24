(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-shared-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"logo\">\n      </a>\n      <!-- <p class=\"invalid-feedback\" *ngIf=\"invalidEmail\">{{errorMessage}}</p> -->\n      <div class=\"login-form\">\n        <form [formGroup]=\"forgotPassword\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n          <div class=\"form-group\">\n            <label>Enter Email</label>\n            <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': submitted && f.email.error}\">\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n              <div *ngIf=\"f.email.errors.email\">Enter must be a valid email address.</div>\n            </div>\n            <div>\n              <span style=\"color:red;margin-top: 5px\">{{errormessage}}</span>\n            </div>\n            <div>\n              <span style=\"color:green;margin-top: 5px\">{{successmessage}}</span>\n            </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\">Send link</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"success-modal\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2><i class=\"fa fa-check-circle text-success\"></i></h2>\n        <h5>{{successMessage}}!</h5>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"logo\">\n      </a>\n      <p class=\"invalid-feedback\" *ngIf=\"invalidLogin\">{{errormessage}}</p>\n      <div class=\"login-form\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"/>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n              <div *ngIf=\"f.email.errors.email\">Enter must be a valid email address.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': submitted && f.password.errors}\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required.</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"custom-control custom-control-primary custom-checkbox\">\n              <input class=\"custom-control-input\" type=\"checkbox\" checked=\"checked\" id=\"rememberMe\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-label\">Remember me</span>\n            </label>\n            <a routerLink=\"/forgot-password\" class=\"pull-right\">Forgot password?</a>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"success-modal\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2><i class=\"fa fa-check-circle text-success\"></i></h2>\n        <h5>{{successMessage}}!</h5>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"logo\">\n      </a>\n      <p *ngIf=\"errorMessage\">{{errormessage}}</p>\n      <div class=\"login-form\">\n        <form [formGroup]=\"resetPassword\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"newPassword\" (ngClass)=\"{'is-invalid': submitted && f.newPassword.errors}\"/>\n            <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.newPassword.errors.required\">Password is required.</div>\n              <div *ngIf=\"f.newPassword.errors.minlength\">Password must be at list 8 character.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" (ngClass)=\"{'is-invalid': submitted && f.confirmPassword.errors}\" />\n            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Password is required.</div>\n              <div *ngIf=\"f.confirmPassword.errors.minlength\">Password must be at list 8 character.</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Password does not matching.</div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"success-modal\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2><i class=\"fa fa-check-circle text-success\"></i></h2>\n        <h5>Password changed successfully!</h5>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9Il19 */");

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/shared/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        // Forgot Service
        this.invalidEmail = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.forgotPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgotPassword.invalid) {
            return;
        }
        this.auth.forgot(this.forgotPassword.value.email).subscribe(function (data) {
            localStorage.setItem('forgot', JSON.stringify(_this.forgotPassword.value.email));
            _this.loginSuccess(data['message']);
        }, function (error) {
            console.log(error);
            _this.invalidEmail = true;
            _this.loginError(error.error.message);
        });
    };
    ForgotPasswordComponent.prototype.loginError = function (e) {
        var _this = this;
        console.log(e);
        this.errormessage = e;
        setTimeout(function () {
            _this.errormessage = "";
        }, 4000);
    };
    ForgotPasswordComponent.prototype.loginSuccess = function (e) {
        var _this = this;
        console.log(e);
        this.successmessage = e;
        setTimeout(function () {
            _this.successmessage = "";
        }, 4000);
        //instead of diverting to reset password it should go to otp verify here
        //this.router.navigateByUrl('/reset-password');
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/shared/forgot-password/forgot-password.component.css")).default]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell !important;vertical-align:middle !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyw2QkFBNkIsQ0FBQyxnQ0FBZ0MsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtkaXNwbGF5OnRhYmxlLWNlbGwgIWltcG9ydGFudDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDt9Il19 */");

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/shared/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        // Login Service
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isLogin()) {
            console.log('already logged in');
            this.router.navigateByUrl('/home/dashboard');
        }
        var remembered = window.localStorage.getItem('rememberMe');
        if (remembered == undefined) {
            this.loginForm = this.formBuilder.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
        }
        else {
            var rem = JSON.parse(remembered);
            this.loginForm = this.formBuilder.group({
                email: [rem.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                password: [rem.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if ($('#rememberMe').is(':checked')) {
            var remember = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };
            window.localStorage.setItem('rememberMe', JSON.stringify(remember));
        }
        else {
            window.localStorage.removeItem('rememberMe');
        }
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var data = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.auth.login(data).subscribe(function (data) {
            console.log('inside data');
            console.log(data);
            console.log(JSON.stringify(data['data']));
            console.log(JSON.stringify(data['data']['token']));
            var remembered = localStorage.getItem('rememberMe');
            if (remembered == undefined) {
                sessionStorage.setItem('currentUser', JSON.stringify(data['data']));
                sessionStorage.setItem('token', JSON.stringify(data['data']['token']));
            }
            else {
                localStorage.setItem('currentUser', JSON.stringify(data['data']));
                localStorage.setItem('token', JSON.stringify(data['data']['token']));
            }
            _this.router.navigateByUrl('/home/dashboard');
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
            //var message = error.error.message
            var message = "Invalid credentials..!";
            //var token = localStorage.getItem('currentUser');
            //if(token){
            //message="Invalid credentials..!"
            //}
            sessionStorage.clear();
            localStorage.clear();
            _this.auth.logout();
            _this.loginError(message);
        });
    };
    LoginComponent.prototype.loginError = function (e) {
        var _this = this;
        console.log(e);
        this.errormessage = e;
        setTimeout(function () {
            _this.errormessage = "";
        }, 4000);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlO30iXX0= */");

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/shared/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mustMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/mustMatch */ "./src/app/shared/service/mustMatch.ts");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.resetPassword = this.formBuilder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        }, {
            validators: Object(_service_mustMatch__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newPassword', 'confirmPassword')
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        get: function () { return this.resetPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetPassword.invalid) {
            return;
        }
        var data = {
            email: JSON.parse(localStorage.getItem('forgot')),
            password: this.resetPassword.value.confirmPassword
        };
        this.auth.reset(data).subscribe(function (data) {
            console.log(data);
            $("#success-modal").modal('show');
            _this.successmessage = data['message'];
            setTimeout(function () {
                $("#success-modal").modal('hide');
            }, 1500);
            setTimeout(function () {
                _this.router.navigateByUrl('/login');
            }, 1600);
            localStorage.removeItem('forgot');
        }, function (error) {
            console.log(error);
            _this.loginError(error.error.message);
        });
    };
    ResetPasswordComponent.prototype.loginError = function (e) {
        var _this = this;
        console.log(e);
        this.errormessage = e;
        setTimeout(function () {
            _this.errormessage = "";
        }, 4000);
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/shared/reset-password/reset-password.component.css")).default]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/mustMatch.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/service/mustMatch.ts ***!
  \*********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // SharedComponent
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharedRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-shared-module.js.map