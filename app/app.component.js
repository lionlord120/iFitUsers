"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subsciber = (function () {
    function Subsciber() {
    }
    return Subsciber;
}());
exports.Subsciber = Subsciber;
var SUBS = [
    { name: 'Mr. Nice', email: 'MNice@gmail.com', lastExercise: 'pull up', lastLogin: 6 },
    { name: 'Narco', email: 'Narc@gmail.com', lastExercise: 'Sprint', lastLogin: 36 },
    { name: 'Bombasto', email: 'Bomb@gmail.com', lastExercise: 'bench press', lastLogin: 1 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'List of Subscribers';
        this.subscriberes = SUBS;
    }
    AppComponent.prototype.onSelect = function (subscriber) {
        this.selectedSubscriber = subscriber;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Users</h2>\n    <ul class=\"subscribers\">\n      <li *ngFor=\"let subscriber of subscriberes\"\n        [class.selected]=\"subscriber === selectedSubscriber\"\n        (click)=\"onSelect(subscriber)\">\n        {{subscriber.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedSubscriber\">\n      <h2>{{selectedSubscriber.name}} details!</h2>\n      <div><label>Name:  </label>{{selectedSubscriber.name}}</div>\n      <div><label>E-mail:  </label>{{selectedSubscriber.email}}</div>    \n      <div><label>Last Excercise: </label>{{selectedSubscriber.lastExercise}}</div>\n      <div><label>Last Login: </label>{{selectedSubscriber.lastLogin}} day(s) ago</div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .subscribers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .subscribers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em;\n      padding-left: 1em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .subscribers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .subscribers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .subscribers .text {\n      position: relative;\n      top: -3px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map