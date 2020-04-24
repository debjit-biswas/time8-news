"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var siteUp = 0;
var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    };
};
var client = new HttpClient();
client.get('https://time8.in', function (response) {
    siteUp = response;
});
console.log(siteUp);
var HomePage = /** @class */ (function () {
    function HomePage(iab, toast) {
        this.iab = iab;
        this.toast = toast;
    }
    HomePage.prototype.ngOnInit = function () { this.openPage('https://time8.in'); };
    HomePage.prototype.openPage = function (url) {
        var _this = this;
        var options = {
            zoom: 'no',
            location: 'no',
            toolbartranslucent: 'yes',
            fullscreen: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            hardwareback: 'yes',
            allowInlineMediaPlayback: 'no',
            hidden: 'no',
            hidenavigationbuttons: 'yes',
            disallowoverscroll: 'yes',
            presentationstyle: 'fullscreen',
            hidespinner: 'yes',
            footer: 'yes'
        };
        var browser = this.iab.create(url, '_self', options);
        browser.on('loadstop').subscribe(function (event) {
            _this.toast.show("Page loaded!", '5000', 'buttom').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
