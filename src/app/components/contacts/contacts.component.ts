import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Contact } from "../../models/contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  contacts: Contact[]

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getContacts()
  }

  getContacts() {
    this.api.getUsers().subscribe(result => {
      this.contacts = result["data"]
    })
    
  }
}
