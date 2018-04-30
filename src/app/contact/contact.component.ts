import {
    Component,
    ChangeDetectionStrategy
  }                           from '@angular/core';
import { Router }           from '@angular/router';
import { Subscription }     from "rxjs";
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
  }                          from '@angular/forms';
import { ContactSandbox }     from './contact.sandbox';
  
@Component({
    selector: 'app-contact',
    template: `
    <app-tabs></app-tabs>
    <app-layout>
      <h1>Contact</h1>
      <div class="input-field col s12">
        <select multiple>
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Multiple Select</label>
      </div>
    </app-layout>
    <app-footer></app-footer>
    `,
    styleUrls: ["./contact.component.scss"]
  })
export class ContactComponent {

    public submitted:  boolean = false;
    public name:       AbstractControl;
    public email:      AbstractControl;
    public company:    AbstractControl;
    public message:    AbstractControl;
    public contactForm:  FormGroup;
  
    constructor(
      private fb: FormBuilder,
      public contactSandbox: ContactSandbox
    ) {}
  
    ngOnInit() {
      this.initContactForm();
    }
  
    /**
     * Builds a form instance (using FormBuilder) with corresponding validation rules 
     */
    public initContactForm(): void {
      this.contactForm = this.fb.group({
        name:       ['', Validators.required],
        email:      ['', [Validators.required, this.contactSandbox.validationService.validateEmail]],
        company:   ['', Validators.required],
        message:  ['', Validators.required]
      });
  
      this.name     = this.contactForm.controls['name'];
      this.email     = this.contactForm.controls['email'];
      this.company  = this.contactForm.controls['company'];
      this.message  = this.contactForm.controls['message'];
    }
  
    /**
     * Handles form 'submit' event. Calls sandbox contact function if form is valid.
     *
     * @param event
     * @param form
     */
    public onSubmit(event: Event, form: any): void {
      event.stopPropagation();
      this.submitted = true;
  
      if (this.contactForm.valid) this.contactSandbox.contact(form);
    }
  }