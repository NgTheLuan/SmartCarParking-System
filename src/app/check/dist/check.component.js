"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CheckComponent = /** @class */ (function () {
    function CheckComponent(scpsService) {
        this.scpsService = scpsService;
    }
    CheckComponent.prototype.ngOnInit = function () {
        this.retrieveCarParking();
    };
    CheckComponent.prototype.refreshList = function () {
        this.currentCarParking = null;
        this.currentIndex = -1;
        this.retrieveCarParking();
    };
    CheckComponent.prototype.retrieveCarParking = function () {
        var _this = this;
        this.scpsService.getAll().snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (c) {
                return (__assign({ key: c.payload.key }, c.payload.val()));
            });
        })).subscribe(function (data) {
            _this.carparkings = data;
        });
    };
    CheckComponent.prototype.setActiveCarParking = function (carparking, index) {
        this.currentCarParking = carparking;
        this.currentIndex = index;
    };
    CheckComponent.prototype.removeAllCarParking = function () {
        var _this = this;
        this.scpsService.deleteAll()
            .then(function () { return _this.refreshList(); })["catch"](function (err) { return console.log(err); });
    };
    CheckComponent.prototype.getColor = function (Color) {
        switch (Color) {
            case 'out':
                return 'orange';
            case 'wait':
                return '';
        }
    };
    CheckComponent = __decorate([
        core_1.Component({
            selector: 'app-check',
            templateUrl: './check.component.html',
            styleUrls: ['./check.component.css']
        })
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
