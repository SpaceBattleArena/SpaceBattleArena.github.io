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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Article } from '../../models/article';
// import { ArticleService } from '../../services/article';
var NewsComponent = /** @class */ (function () {
    // allArticles: Article[];
    // slug: string;
    // private sub: any;
    // article: Article;
    // test: any = {};
    function NewsComponent() {
        //this.allArticles = JSON.parse(localStorage.getItem('articles'));
    }
    NewsComponent.prototype.ngOnInit = function () {
        // this.sub = this.route.params.subscribe(params => {
        //     this.slug = params['slug'];
        // });
        // let matchedArticles = this.allArticles.filter(article => { return article.slug === this.slug; });
        // this.article = matchedArticles.length ? matchedArticles[0] : null;
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    NewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['../../../../assets/css/news.component.css'],
            templateUrl: '../../templates/news.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map