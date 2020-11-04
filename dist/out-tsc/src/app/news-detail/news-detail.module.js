import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsDetailPage } from './news-detail.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: NewsDetailPage
    }
];
let NewsDetailPageModule = class NewsDetailPageModule {
};
NewsDetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewsDetailPage]
    })
], NewsDetailPageModule);
export { NewsDetailPageModule };
//# sourceMappingURL=news-detail.module.js.map