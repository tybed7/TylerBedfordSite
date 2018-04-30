export class ContactForm {
    public name:    string;
    public email:   string;
    public company: string;
    public message: string;
  
    constructor(contactForm: any) {
      this.name    = contactForm.name;   
      this.email   = contactForm.email;
      this.company = contactForm.company;
      this.message = contactForm.message;
    }
  }