import { Component, OnInit } from '@angular/core';

export interface MacquarieToday {
  name: string;
  status: string;
  activity: string;
  location: string;
  arrow: string;
}
const MACQUARIE_DATA: MacquarieToday[] = [
  { status: 'active', name: 'June Marbahy', activity: 'Blog articles', location: 'B3', arrow: 'keyboard_arrow_down' },
  { status: 'active', name: 'John Biegey', activity: 'Site Keywords', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
  { status: 'active', name: 'Janet Bayou', activity: 'Advertising', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
  { status: 'inactive', name: 'John Deluna', activity: 'Absent', location: 'M1', arrow: 'keyboard_arrow_down' },
  { status: 'active', name: 'Jo Mahuay', activity: 'EOY', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
  { status: 'active', name: 'Ida', activity: 'EOY', location: 'HOME OFFICE	', arrow: 'keyboard_arrow_down' },
];

@Component({
  selector: 'app-macquarie-today',
  templateUrl: './macquarie-today.component.html',
  styleUrls: ['./macquarie-today.component.scss']
})
  
export class MacquarieTodayComponent implements OnInit {
  
  displayedColumns: string[] = ['status', 'name', 'activity', 'location','arrow'];
  dataSource = MACQUARIE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
