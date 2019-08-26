import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/models/contact.model';
import { DataDeliveryService } from 'src/app/services/data-delivery.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  tabName: string = "Chats"
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
