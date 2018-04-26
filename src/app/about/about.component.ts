import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
  import { Router }           from '@angular/router';
  import { Subscription }     from "rxjs";
  import { AboutSandbox }     from './about.sandbox'
  
  @Component({
    selector: 'app-about',
    template: `
      <h1>HI</h1>
    `
  })
  export class AboutComponent {
  
    constructor(
      private router: Router,
      public aboutSandbox: AboutSandbox
    ) {}
  
 
}
  
  