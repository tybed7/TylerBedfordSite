import { Injectable } 	     from '@angular/core';
import { Router }            from '@angular/router';
import { Sandbox } 			     from '../../sandbox/base.sandbox';
import { Store }      	     from '@ngrx/store';
import * as store     	     from '../../store';
import * as settingsActions  from '../../store/actions/settings.action';
import { TranslateService }  from '@ngx-translate/core';

@Injectable()
export class LayoutSandbox extends Sandbox {

 

  constructor(
    protected appState$: Store<store.State>,
    private translateService: TranslateService,
    private router: Router
  ) {
  	super(appState$);
  }

}