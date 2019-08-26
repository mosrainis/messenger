import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataDeliveryService } from 'src/app/services/data-delivery.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
