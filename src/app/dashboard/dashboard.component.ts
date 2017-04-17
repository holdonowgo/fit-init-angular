import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  toggleSideBar(): void {
  $('.ui.sidebar').sidebar('toggle');
  }

  ngOnInit() {
  }

}
