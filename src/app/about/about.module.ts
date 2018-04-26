import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserModule }            from "@angular/platform-browser";
import { ComponentsModule }         from '../shared/components';
//import { ContainersModule }         from '../shared/containers';
import { TranslateModule }          from '@ngx-translate/core';
import { RouterModule }             from '@angular/router'
import { AboutSandbox } from './about.sandbox';
import { AboutComponent } from './about.component'
import { AboutRoutingModule } from './about-routing.module'
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
    imports: [
        CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    TranslateModule,
    SimpleNotificationsModule,
    AboutRoutingModule
    ],
    declarations: [AboutComponent],
    providers: [AboutSandbox]

})
export class AboutModule {}