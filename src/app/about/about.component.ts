import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
  import { Router }           from '@angular/router';
  import { Subscription }     from "rxjs";
  import { AboutSandbox }     from './about.sandbox';
  
  @Component({
    selector: 'app-about',
    template: `
    <app-tabs></app-tabs>
    <app-layout>
      <div class="row">
        <div class="col s12 m12 l12">
              <h2 class="card-title center white-text">{{title}}</h2>
              <h5 class="center white-text">{{biography}}</h5>
        </div>
      </div>
      <div class="row">
      <div class="col s12 m4 l4">
      <div class="card hoverable">
       <div class="card-image">
          <img src="{{card3Image}}">
         <span class="card-title black-text">{{card3Title}}</span>
       </div>
        <div class="card-content">
          <p>{{card3Bio}}</p>
       </div>
        
      </div>
      </div>
    <div class="col s12 m4 l4">
      <div class="card hoverable">
        <div class="card-image">
          <img src="{{card1Image}}">
          <span class="card-title">{{card1Title}}</span>
        </div>
        <div class="card-content">
          <p>{{card1Bio}}</p>
        </div>
        
      </div>
    </div>
    <div class="col s12 m4 l4">
    <div class="card hoverable">
       <div class="card-image">
          <img src="{{card2Image}}">
         <span class="card-title">{{card2Title}}</span>
       </div>
        <div class="card-content">
          <p>{{card2Bio}}</p>
       </div>
        
      </div>
    </div>
    
  </div>
    </app-layout>
    <app-footer></app-footer>
    `
  })
  export class AboutComponent {
  title = "Tyler Bedford"
  card1Image = "./assets/images/me.JPG"
  card2Image = "./assets/images/rockfish.png"
  card3Image = "./assets/images/ignite.png"
  card1Title = "About Me"
  card1Bio = "18 years old from Bentonville, AR. I have been developing applications for 5 years now, and have experience with the full stack development"
  card2Title = "Past Employment"
  card2Bio = "I developed promotional websites and emails, mobile apps, and applications for clients and the company. I worked here for over a year developing most of the skills I use today."
  card3Title = "Education"
  card3Bio = "Graduated from Bentonville High School in 2017. I was part of the Ignite program which allowed high school students to maintain internships during class for an industry of interest."
  biography = "A collection about myself, my projects, and ideas"
    constructor(
      private router: Router,
      public aboutSandbox: AboutSandbox
    ) {}
  
 
}
  
  