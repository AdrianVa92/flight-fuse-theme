import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-on-services',
  templateUrl: './add-on-services.component.html',
  styleUrls: ['./add-on-services.component.scss']
})
export class AddOnServicesComponent implements OnInit {
  appData = [
    {
      image: 'assets/images/common/manage-add-ons/laptop.png',
      unit: 'Laptop',
      assigned_to: 'Jenna Mava',
      team: 'Marketing',
      location: 'B6, Clark.',
      type: 'Leased',
      status: 'Active',
      amount: '$302',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/tablet.png',
      unit: 'Tablet',
      assigned_to: 'Allan Java',
      team: 'Sales Support',
      location: 'B6, Clark.',
      type: 'Leased',
      status: 'Active',
      amount: '$102',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/phone.png',
      unit: 'Phone',
      assigned_to: 'Mike Jane',
      team: 'Executive Team',
      location: 'Sydney',
      type: 'Leased',
      status: 'Expired',
      amount: '$0',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/laptop.png',
      unit: 'Laptop',
      assigned_to: 'Jenna Mava',
      team: 'Marketing',
      location: 'B6, Clark.',
      type: 'Leased',
      status: 'Active',
      amount: '$22',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/desktop.png',
      unit: 'Desktop',
      assigned_to: 'Steve Mitchel',
      team: 'Sales',
      location: 'Brisbane',
      type: 'Leased',
      status: 'Active',
      amount: '$123',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/storage.png',
      unit: 'Storage',
      assigned_to: 'Jon Guiba',
      team: 'IT',
      location: 'B4, Clark.',
      type: 'Leased',
      status: 'active',
      amount: '$22',
      icons: ''
    },
    {
      image: 'assets/images/common/manage-add-ons/keyboard.png',
      unit: 'Keyboard',
      assigned_to: 'Jenna Mava',
      team: 'Marketing',
      location: 'B6, Clark.',
      type: 'Leased',
      status: 'active',
      amount: '$0',
      icons: ''
    }
  ];
  columnsToDisplay: string[] = ['image', 'unit', 'assigned_to', 'team', 'location', 'type', 'status', 'amount', 'icons'];
  dataSource = this.appData;
  constructor() { }

  ngOnInit(): void {
  }

}
