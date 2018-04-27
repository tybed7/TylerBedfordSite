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
    <div class="card-panel white">
    <div class="row">
        <div class="col center s12 m12 l12">
              <h3 class="card-title black-text">{{goals}}</h3>
              <h5 class="black-text">{{goalbio}}</h5>
        </div>
      </div>

      <div class="row">
      <div class="col center s12 m4 l4">
      <i class="material-icons blue large roundcon">share</i>
      <h5 class="card-content">{{goal2}}</h5>
      </div>
      <div class="col center s12 m4 l4">
      <i class="material-icons blue large roundcon">merge_type</i>
      <h5 class="card-content">{{goal1}}</h5>
      </div>
      <div class="col center s12 m4 l4">
      <i class="material-icons blue large roundcon">touch_app</i>
      <h5 class="card-content">{{goal3}}</h5>
      </div>
      
      
      </div>

    </div>
    </app-layout>
    <app-footer></app-footer>
    `,
    styleUrls: ["./about.component.scss"]
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
  goals = "Objectives"
  goalbio = "What I hope to achieve with this website"
  goal1 = "Give insights into the current projects I am working on. This will include code examples, live examples, and explanations of how I developed my projects"
  goal2 = "Allow others to contact me about projects or work that they may be insterested in having me collaborate with."
  goal3 = "Showcase specific technologies that I would be interested in learning/developing"
  biography = "A collection about myself, my projects, and ideas"
    constructor(
      private router: Router,
      public aboutSandbox: AboutSandbox
    ) {}
  
 
}
  
  