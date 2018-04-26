/**
 * More info: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, combineReducers } from '@ngrx/store';

/**
 * More info: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

export interface State {
    //TODO implement states
  }
  
  const reducers = {
      //TODO implement reducers
  };
  
  export function store(state: any, action: any) {
    const store: ActionReducer<State> = compose(combineReducers)(reducers);
    return store(state, action);
  }

  //TODO export selector functions to get each part of the state (Ex. getAboutState(), getAboutLoaded(), getAboutLoading())
  