import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
  import { Router }           from '@angular/router';
  import { Subscription }     from "rxjs";
  import { AboutSandbox }     from './about.sandbox';
  
  @Component({
    selector: 'app-about',
    template: `
    <app-layout>
    <ul class="collapsible">
  <li>
    <div class="collapsible-header">
      <i class="material-icons">filter_drama</i>
      First
      <span class="new badge">4</span></div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
  <li>
    <div class="collapsible-header">
      <i class="material-icons">place</i>
      Second
      <span class="badge">1</span></div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
</ul>
</app-layout>
    `
  })
  export class AboutComponent {
  
    constructor(
      private router: Router,
      public aboutSandbox: AboutSandbox
    ) {}
  
 
}
  
  