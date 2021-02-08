import { CreateAddOnComponent } from './../../modals/create-add-on/create-add-on.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  router: string;
  constructor(private _router: Router, public createAddOnDialog: MatDialog) { 
    this.router = _router.url; 
  }

  ngOnInit(): void {

  }

  openCreateAddOn(): void {
    const modalRef = new MatDialogConfig();
    modalRef.disableClose = true;
    modalRef.id = 'CreateAddOnComponent';
    modalRef.height = '600px';
    modalRef.width = '950px';
    const modalDialog = this.createAddOnDialog.open(CreateAddOnComponent, modalRef);
  }

}
