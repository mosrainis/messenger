import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Contact } from "../../models/contact.model";
import { DataDeliveryService } from 'src/app/services/data-delivery.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  tabName: string = "Contacts"
  contacts: Contact[]
  onLoading: boolean = true
  
  constructor(
    private api: ApiService,
    private delivery: DataDeliveryService
  ) { }

  ngOnInit() {
    this.sendTabName()
    this.getContacts()
  }

  getContacts() {
    this.api.getUsers().subscribe(result => {
      this.onLoading = false
      this.contacts = result["data"]
    },
    error => {
      this.onLoading = false
      console.error(error);
    })
  }

  sendTabName() {
    this.delivery.sectionName.next(this.tabName)
  }
}
