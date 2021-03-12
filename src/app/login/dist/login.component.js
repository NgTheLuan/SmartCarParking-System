"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    LoginComponent.prototype.loginWithFirebase = function () {
        // alert("Chào FB");
        var email = this.loginForm.controls['email'].value;
        var password = this.loginForm.controls['password'].value;
        this.auth.loginFirebase(email, password).then(function (res) {
            console.log('Đăng Nhập Thành Công !');
            location.href = '/home';
        });
    };
    LoginComponent.prototype.onSubmit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
