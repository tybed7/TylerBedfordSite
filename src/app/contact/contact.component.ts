import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
  import { Router }           from '@angular/router';
  import { Subscription }     from "rxjs";
  import { ContactSandbox }     from './contact.sandbox';
  
  @Component({
    selector: 'app-contact',
    template: `
    <app-tabs></app-tabs>
    <app-layout>
      <h1>Contact</h1>
    </app-layout>
    <app-footer></app-footer>
    `,
    styleUrls: ["./contact.component.scss"]
  })
  export class ContactComponent {
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
  goal1 = "Give insights into the current contact I am working on. This will include code examples, live examples, and explanations of how I developed my contact"
  goal2 = "Allow others to contact me about contact or work that they may be insterested in having me collaborate with."
  goal3 = "Showcase specific technologies that I would be interested in learning/developing"
  biography = "A collection about myself, my contact, and ideas"
    constructor(
      private router: Router,
      public projectsSandbox: ContactSandbox
    ) {}
  
 
}
  
  