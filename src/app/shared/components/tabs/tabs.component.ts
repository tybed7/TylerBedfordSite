  import { Component } from '@angular/core';
  import { Router }    from '@angular/router'


  @Component({
    selector: 'app-tabs',
    template: `
    <div class="row blue lighten-3" style="margin:0 0;">
    <div class="col s12">
      <ul class="tabs  z-depth-1">
        <li class="tab col s4"><a routerLink="/about" routerLinkActive="current" class="active blue-text">About</a></li>
        <li class="tab col s4 disabled"><a routerLink="/projects" class="blue-text">Projects</a></li>
        <li class="tab col s4 disabled"><a routerLink="/contact" class="blue-text">Contact</a></li>
      </ul>
    </div>
  </div>
    `
  })
  export class TabsComponent {
      constructor() {}
  }