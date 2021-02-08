import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-overview',
  templateUrl: './staff-overview.component.html',
  styleUrls: ['./staff-overview.component.scss']
})
export class StaffOverviewComponent implements OnInit {
  staffData = [
    {
      status: 'active',
      name: 'June Marbahy',
      role: 'Marketing Specialist 1',
      team: 'Marketing',
      activity: 'Blog articles',
      rating: 4,
      dreampoints: 32223,
      tenure: '2 years'
    },
    {
       status: 'active',
       name: 'John Biegey',
       role: 'SEO Specialist',
       team: 'Marketing',
       activity: 'Site Keywords',
       rating: 5,
       dreampoints: 12233,
       tenure: '5 years'
     },
     {
       status: 'active',
       name: 'Janet Bayou',
       role: 'Designer',
       team: 'Creative',
       activity: 'Advertising',
       rating: 4,
       dreampoints: 1223,
       tenure: '2 years'
     },
      {
        status: 'inactive',
        name: 'John Deluna',
        role: 'Designer',
        team: 'Creative',
        activity: 'Absent',
        rating: 4,
        dreampoints: 22253,
        tenure: '5 years'
      },
     {
       status: 'active',
       name: 'Jo Mahuay',
       role: 'Accountant',
       team: 'Finance',
       activity: 'EOY',
       rating: 5,
       dreampoints: 243342,
       tenure: '3 years'
      },
     {
       status: 'active',
       name: 'Ida Wanhay',
       role: 'Accountant Lead',
       team: 'Finance',
       activity: 'EOY',
       rating: 5,
       dreampoints: 1243342,
       tenure: '6 years'
      },
  ];

  columnsToDisplay: string[] = ['status', 'name', 'role', 'team', 'activity', 'rating', 'dreampoints', 'tenure'];
  dataSource = this.staffData;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
