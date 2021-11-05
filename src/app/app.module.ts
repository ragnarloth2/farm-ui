import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { NfeEntryComponent } from './apps/nfe-entry/nfe-entry.component';
import {AppsModule} from "./apps/apps.module";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzListModule} from "ng-zorro-antd/list";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzRateModule} from "ng-zorro-antd/rate";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzInputModule} from "ng-zorro-antd/input";

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent,
        NfeEntryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        TemplateModule,
        SharedModule,
        NgChartjsModule,
        AppsModule,
    ],
    providers: [
        {
            provide: NZ_I18N,
            useValue: en_US,
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        ThemeConstantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
