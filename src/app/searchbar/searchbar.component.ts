import { Component, OnInit, EventEmitter,
 Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() beerList = [];

  loading: boolean;
  http: Http;
  // no need to make link a component level var. it only lives in the scope of performSearch.
  // link = `http://the-ipa-api.herokuapp.com/ipa-api/search?name=`;

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.loading = false;
  }

  // this call would be best placed in a service and injected into this component.
  performSearch(query: HTMLInputElement): void {
    this.loading = true;
    // const apiLink = this.link + query.value;
    // this is probably a better way to do this.
    const label_url = 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png'
    const apiLink = `http://the-ipa-api.herokuapp.com/ipa-api/search?name=${query.value}`;
    this.http.get(apiLink)
    .subscribe((res: Response) => {
      const resultArray = res.json();
      const beerArray = [];
      for (let i = 0; i < resultArray.length; i++) {
          const beer = new Beer(resultArray[i]);
          // this is cleaner than having the label_url here.
          if (beer.label_url !== label_url) {
             beerArray.push(beer);
          }
          this.loading = false;
      }

      this.beerList = beerArray;
    },
    (err: any) => {
      console.log(err);
      this.loading = false;
    }
  );
  }

}
