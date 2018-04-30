/**
 * More info: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, combineReducers, MetaReducer } from '@ngrx/store';

/**
 * More info: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

import * as fromContact            from './reducers/contact.reducer';
import { from } from 'rxjs/observable/from';

export interface State {
    contact: fromContact.State;
  }
  
export function reducers(reducer): ActionReducer<any,any> {
  console.log(fromContact.reducer)
  return fromContact.reducer
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
  

  //TODO export selector functions to get each part of the state (Ex. getAboutState(), getAboutLoaded(), getAboutLoading())
  