import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import {
  ContactForm
}                       from '../shared/models';
import {
  HttpService,
  POST,
  Body,
  DefaultHeaders,
  Adapter
}                       from '../shared/asyncServices/http';
import { ContactSandbox }  from './contact.sandbox';

@Injectable()
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
export class ContactApiClient extends HttpService {

  /**
   * Submits contact form to the server
   * 
   * @param form
   */
  @POST("/api/contact")
  public contact(@Body form: ContactForm): Observable<any> { return null; };


}