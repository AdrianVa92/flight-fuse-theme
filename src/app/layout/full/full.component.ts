import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  router: string;
  constructor(private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit(): void {
  }

}
