import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subscription }     from "rxjs";
import { LayoutSandbox }    from './layout.sandbox';
import { ConfigService }    from '../../../app-config.service';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.container.scss'],
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `
})
export class LayoutContainer {


  constructor(
    private configService: ConfigService,
    public layoutSandbox: LayoutSandbox
  )  {} 
 
}