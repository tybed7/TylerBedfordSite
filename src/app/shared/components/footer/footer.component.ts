import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
  <footer class="page-footer blue lighten-3 ">
  <div class="container">
    <div class="row">
      <div class="col l12S s12">
        <h5 class="white-text center">Contact</h5>
        <ul class="center">
          <li><a class="fa fa-github" href="https://github.com/tybed7/TylerBedfordSite"></a> <a class="fa fa-linkedin" href="https://www.linkedin.com/in/tyler-b-661181104/"></a></li>
          <li><h6 class="center">tybed7@gmail.com</h6></li>
          <li><h6 class="center">Contact Form is being worked on and will be up ASAP</h6></li>
          
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
    <p class="grey-text text-lighten-4 left">Tyler Bedford's Site</p>
    <p class="grey-text text-lighten-4 right">Updates Coming Soon</p>
    </div>
  </div>
</footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	constructor() {}
}