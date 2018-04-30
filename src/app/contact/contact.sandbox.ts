import { Injectable } 	 from '@angular/core';
import { Router }        from '@angular/router';
import { Store }      	 from '@ngrx/store';
import { Subscription }  from "rxjs";
import { Sandbox } 			 from '../shared/sandbox/base.sandbox';
import * as store     	 from '../shared/store';
import * as contactActions from '../shared/store/actions/contact.action'
import {
  UtilService,
  ValidationService
}                        from '../shared/utility';
import {
  ContactForm
}                        from '../shared/models/contact.model'

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
    this.registerContactEvents();
  }

  /**
   * Dispatches contact action
   * 
   * @param form
   */
  public contact(form: any): void{
    this.appState$.dispatch(new contactActions.DoContactAction(new ContactForm(form)));
  }


   /**
   * Unsubscribe from events
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  
  /**
   * Registers events
   */
  private registerContactEvents(): void {
    // Subscribes to login success event and redirects user to home page
    
    }; 
}