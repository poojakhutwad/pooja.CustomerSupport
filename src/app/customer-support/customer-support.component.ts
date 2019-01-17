import { Component, OnInit } from '@angular/core';
import { CustomerSupportModel } from '../customer-support-model';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  customerSupport: CustomerSupportModel = new CustomerSupportModel("", "", "", 0, "", "", "", 0, "");
  states: string[] = ["Maharashtra", "Gujarat", "Uttar Pradesh"];
  constructor() { }

  SubmitForm(data: any){
    console.log(data);
  }

  ngOnInit() {
  }

}
