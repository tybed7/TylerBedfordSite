
import { BrowserModule }  from '@angular/platform-browser';
import { 
  APP_INITIALIZER,
  NgModule 
}                          from '@angular/core';
import {
  HttpModule,
  RequestOptions,
  XHRBackend,
  Http
}                          from '@angular/http'
import { Router }          from '@angular/router'

//Routes
import { AppRoutingModule }    from './app-routing.module';


//Modules
import { AppComponent } from './app.component';
import { HttpServiceModule } from './shared/asyncServices/http/http.module'
import { AboutModule }    from './about/about.module';
import { UtilityModule}        from './shared/utility';
import { PageNotFoundComponent } from './shared/components/pageNotFound/pageNotFound.component'

//Store
import { store }               from './shared/store';

//Effects
//TODO add effects

//Guards

//Services
import { ConfigService }       from './app-config.service';

//Libraries
import { StoreModule }         from '@ngrx/store';
import { EffectsModule }       from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  TranslateModule,
  TranslateLoader
}                              from '@ngx-translate/core';
import { TranslateService }    from '@ngx-translate/core';
import {
  SimpleNotificationsModule,
  NotificationsService
}                              from 'angular2-notifications';

//Factory function to load the config file before application startup
export function configServiceFactory (config: ConfigService) {
  return () => config.load()
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Core Dependencies
    BrowserModule,
    HttpModule,

    //Http Service
    HttpServiceModule.forRoot(),

    //Utility Module
    UtilityModule.forRoot(),

    //App Custom Modules
    AboutModule,
    AppRoutingModule,

    //Store
    StoreModule.forRoot(store),
    StoreDevtoolsModule.instrument(),
    //Effects
    //TODO Run effects

    //Internationalization Module
    TranslateModule.forRoot(),

    //SimpleNotificationsModule
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
