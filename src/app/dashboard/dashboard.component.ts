import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import c3 from 'c3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

    let chart = c3.generate({
      data: {
          columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'spline'
      }
    }); }

  ngOnInit() {
  }

}
