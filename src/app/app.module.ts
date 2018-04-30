
import { BrowserModule }  from '@angular/platform-browser';
import { 
  APP_INITIALIZER,
  NgModule 
}                          from '@angular/core';
import { FormsModule }         from '@angular/forms';
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
import { ProjectsModule } from './projects/projects.module'
import { ContactModule }  from './contact/contact.module'
import { UtilityModule}        from './shared/utility';

//Store
import { reducers }               from './shared/store';

//Effects
import { ContactEffects }     from './shared/store/effects/contact.effect'

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
    FormsModule,
    HttpModule,

    //Http Service
    HttpServiceModule.forRoot(),

    //Utility Module
    UtilityModule.forRoot(),

    //App Custom Modules
    AboutModule,
    ProjectsModule,
    ContactModule,
    AppRoutingModule,

    //Store
    StoreModule.forRoot({contact: reducers}),
    StoreDevtoolsModule.instrument(),
    //Effects
    EffectsModule.forRoot([ContactEffects]),

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
