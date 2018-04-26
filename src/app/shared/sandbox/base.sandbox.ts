import { Injectable } 	    from '@angular/core';
import { Store }            from '@ngrx/store';
import { Observable }       from 'rxjs/Observable';
import * as store           from '../store';

//import { localeDateString } from '../utility';


export abstract class Sandbox {
  
    constructor(protected appState$: Store<store.State>) {}
  
    
}