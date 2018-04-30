import * as actions from '../actions/contact.action';
import { ContactForm }     from '../../models';

export interface State {
  loading: boolean;
  loaded:  boolean;
  failed:  boolean;

};

const INITIAL_STATE: State = {
  loading:       false,
  loaded:        false,
  failed:        false
};

export function reducer(state = INITIAL_STATE, action: actions.Actions): State {
  if (!action) return state;

  switch (action.type) {
    case actions.ActionTypes.DO_CONTACT:{
      return Object.assign({}, state, {
        loading: true,
        loaded:  false,
        failed:  false
      });
    }

    case actions.ActionTypes.DO_CONTACT_SUCCESS:{
      return Object.assign({}, state, {
        loaded:  true,
        loading: false,
        failed:  false
      });
    }

    case actions.ActionTypes.DO_CONTACT_FAIL: {
      return Object.assign({}, INITIAL_STATE, { failed:  true });
    }

    

    default: {
      return state;
    }
  }
}

export const getLoading    = (state: State) => state.loading;
export const getLoaded     = (state: State) => state.loaded;
export const getFailed     = (state: State) => state.failed;