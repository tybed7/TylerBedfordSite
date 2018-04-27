import { Injectable } 	 from '@angular/core';
import { Router }        from '@angular/router';
import { Store }      	 from '@ngrx/store';
import { Subscription }  from "rxjs";
import { Sandbox } 			 from '../shared/sandbox/base.sandbox';
import * as store     	 from '../shared/store';
import {
  UtilService,
  ValidationService
}                        from '../shared/utility';


@Injectable()
export class ContactSandbox extends Sandbox {


  private subscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
    protected appState$: Store<store.State>,
    private utilService: UtilService,
    public validationService: ValidationService
  ) {
    super(appState$);
  }

 
}