import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserModule }            from "@angular/platform-browser";
import { ComponentsModule }         from '../shared/components';
import { ContainersModule }         from '../shared/containers';
import { TranslateModule }          from '@ngx-translate/core';
import { RouterModule }             from '@angular/router'
import { ContactSandbox } from './contact.sandbox';
import { ContactComponent } from './contact.component'
import { ContactRoutingModule } from './contact-routing.module'
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
    imports: [
        CommonModule,
        ContainersModule,
    BrowserAnimationsModule,
    ComponentsModule,
    TranslateModule,
    SimpleNotificationsModule,
    ContactRoutingModule
    ],
    declarations: [ContactComponent],
    providers: [ContactSandbox]

})
export class ContactModule {}