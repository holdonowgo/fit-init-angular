import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer.model';
import $ from 'jquery';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;
  @Input() beers: Beer[];

  constructor() {

  }

  ngOnInit() {
  }

}
