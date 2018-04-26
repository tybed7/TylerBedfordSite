import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'page-not-found',
  template: `
    <div class="card-panel blue lighten-3">
      <div class="row">
        <div class="col s3"></div>
        <div class="col s6">
          <h1>{{error}}</h1>
          <button class="waves-effect waves-light btn-large" (click)="goBack()">{{ button }}</button>
        </div>
        <div class="col s3"></div>
      </div>
    </div>
  
  `
})
export class PageNotFoundComponent {
  error = 'This page can not be found'
  button = 'Go Back'
	constructor(private location: Location) {}

  public goBack() {
    this.location.back();
  }
}