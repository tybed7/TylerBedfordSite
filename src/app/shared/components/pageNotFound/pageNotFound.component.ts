import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'page-not-found',
  template: `
    <div>
    	
      	<h1>The page you are on is not here m8</h1>
   
    </div>
  `
})
export class PageNotFoundComponent {
	constructor(private location: Location) {}

  public goBack() {
    this.location.back();
  }
}