import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/app/models/endpoints';
import { Observable } from 'rxjs';
import { contact } from 'src/app/models/contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<contact[]> {
    return this.http.get<contact[]>(Endpoints.getAllContacts);
  }

  public getContact(phone: string) {
    console.log('request ' + `${Endpoints.getContact}/${phone}`);
    return this.http.get<contact>(`${Endpoints.getContact}/${phone}`);
  }
}
