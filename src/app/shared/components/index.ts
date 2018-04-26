import { NgModule }                     from '@angular/core';

import { RouterModule }                 from '@angular/router';
import { CommonModule }                 from '@angular/common';

import { TranslateModule }              from '@ngx-translate/core';


import { PageNotFoundComponent }        from './pageNotFound/pageNotFound.component';
import { FooterComponent }              from './footer/footer.component'
import { TabsComponent }                from './tabs/tabs.component'

export const COMPONENTS = [
  PageNotFoundComponent,
  FooterComponent,
  TabsComponent
];

@NgModule({
  imports: [
    RouterModule,
  	CommonModule,
    TranslateModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }