import { Component, OnInit } from '@angular/core';
import { DataDeliveryService } from 'src/app/services/data-delivery.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sectionName //Tabs name

  constructor(
    private delivery: DataDeliveryService
  ) { }

  ngOnInit() {
    this.getTabName()
  }

  getTabName() {
    this.delivery.sectionName.subscribe(result => {
      this.sectionName = result
    })
  }

}
