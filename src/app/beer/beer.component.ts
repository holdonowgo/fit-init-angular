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
    // this.beer = new Beer({
    //   "id": "MlBdyG",
    //   "name": "Shrub Tundra",
    //   "abv": "6.3",
    //   "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/MlBdyG/upload_5Nj0ib-medium.png",
    //   "description": "The amalgamate child of two Half Acre passions: beer and coffee. Brewed with loads of Dark Matter coffee, this beer ends up around 3% mood booster. Watch for it in early spring.",
    //   "type_name": "Coffee Beer"
    // });
  }

  ngOnInit() {
  }

}
