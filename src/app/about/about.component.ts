import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
  import { Router }           from '@angular/router';
  import { Subscription }     from "rxjs";
  import { AboutSandbox }     from './about.sandbox'
  import { MaterializeModule } from 'angular2-materialize'
  
  @Component({
    selector: 'app-about',
    template: `
    <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
  </ul>

    `
  })
  export class AboutComponent {
  
    constructor(
      private router: Router,
      public aboutSandbox: AboutSandbox
    ) {}
  
 
}
  
  