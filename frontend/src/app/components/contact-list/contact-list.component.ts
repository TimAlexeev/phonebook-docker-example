import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';
import { contact } from 'src/app/models/contact';
import { MatDialog } from '@angular/material';
import { ContactCardComponent } from '../contact-card/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: contact[];

  constructor(private contactService: ContactService, private contactCard: MatDialog) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(c => {
      this.contacts = c;
    })
  }

  getContact(phone: string) {
    this.contactService.getContact(phone);
  }

  openContactCard(contact: contact) {
    this.contactCard.open(ContactCardComponent, {
      data: {contact: contact}
    });
  }

}
