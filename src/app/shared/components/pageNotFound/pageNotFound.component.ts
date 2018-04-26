import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'page-not-found',
  template: `
    <div>
    	
      	<h1>hi</h1>
      	<h3>you did it</h3>
   
    </div>
  `
})
export class PageNotFoundComponent {
	constructor(private location: Location) {}

  public goBack() {
    this.location.back();
  }
}