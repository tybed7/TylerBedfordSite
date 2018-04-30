import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable }       from '@angular/core';
import { Effect, Actions }  from '@ngrx/effects';
import { Action }           from '@ngrx/store';
import { Observable }       from 'rxjs/Observable';
import { of }               from 'rxjs/observable/of';
import { ContactApiClient }    from '../../../contact/contactApiClient.service';
import * as actions         from '../actions/contact.action';
import { Store }            from '@ngrx/store';
import * as store           from '../index';
import { ContactForm } from '../../models';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ContactEffects {

  constructor(
    private actions$: Actions,
    private contactApiClient: ContactApiClient,
    private appState$: Store<store.State>) {}

  /**
   * Contact effect
   */
  @Effect()
  doLogin$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.DO_CONTACT)
    .map((action: actions.DoContactAction) => action.payload)
    .switchMap(state => {
      return this.contactApiClient.contact(state)
        .map(contact    => new actions.DoContactSuccessAction(new ContactForm(contact)))
        .catch(error => of(new actions.DoContactFailAction()));
    });

}