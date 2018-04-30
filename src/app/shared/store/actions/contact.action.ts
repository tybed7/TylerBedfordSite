import { Action } from '@ngrx/store';
import {
  ContactForm
}                 from '../../models';
import { type }   from '../../utility';


export const ActionTypes = {
    DO_CONTACT:          type('[Contact] Do Contact'),
    DO_CONTACT_SUCCESS:  type('[Contact] Do Contact Success'),
    DO_CONTACT_FAIL:     type('[Contact] Do Contact Fail')
}

/**
 * Contact Actions
 */

export class DoContactAction implements Action{
     type = ActionTypes.DO_CONTACT;

     constructor(public payload: ContactForm) { }
 }

export class DoContactSuccessAction implements Action {
    type = ActionTypes.DO_CONTACT_SUCCESS;
  
    constructor(public payload: any) { }
  }
  
export class DoContactFailAction implements Action {
    type = ActionTypes.DO_CONTACT_FAIL;
  
    constructor(public payload: any = null) { }
  }

export type Actions
  = DoContactAction
  | DoContactSuccessAction
  | DoContactFailAction