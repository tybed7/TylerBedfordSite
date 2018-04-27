import { NgModule }          from '@angular/core';
import {
  RouterModule,
  Routes
}                            from '@angular/router';
import { ContactComponent }    from './contact.component';

const projectsRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }