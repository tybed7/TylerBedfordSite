import { NgModule }                     from '@angular/core';

import { RouterModule }                 from '@angular/router';
import { CommonModule }                 from '@angular/common';

import { TranslateModule }              from '@ngx-translate/core';


import { PageNotFoundComponent }        from './pageNotFound/pageNotFound.component';

export const COMPONENTS = [
  PageNotFoundComponent
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