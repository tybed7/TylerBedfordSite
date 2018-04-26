import { Component } from '@angular/core';
import { Router }     from '@angular/router';
import { AppSandbox } from './app.sandbox';
import { PageNotFoundComponent } from './shared/components/pageNotFound/pageNotFound.component';

@Component({
  selector: 'body',
  template: `
  <router-outlet></router-outlet>
  <simple-notifications [options]="appSandbox.getNotificationOptions()"></simple-notifications>
  `,
  providers: [AppSandbox]
})
export class AppComponent {
  
  constructor(
    private router: Router,
    public appSandbox: AppSandbox
  ) {}

  ngOnInit() {
    this.appSandbox.setupLanguage();
  }
  
  /**
   * Registers events needed for the application
   */
  private registerEvents(): void {
    //TODO add registerEvents logic
  }
}
