import { NgModule }          from '@angular/core';
import {
  RouterModule,
  Routes
}                            from '@angular/router';
import { AboutComponent }    from './about.component';

const authRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }