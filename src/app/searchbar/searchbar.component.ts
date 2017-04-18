import { Component, OnInit, EventEmitter,
 Output,} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Beer } from '../beer.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() beerList = [];

  loading: boolean;
  http: Http;
  link = `http://the-ipa-api.herokuapp.com/ipa-api/search?name=`;

  constructor(http: Http) {
    this.http = http
  }

  ngOnInit() {
    this.loading = false;
  }

  performSearch(query: HTMLInputElement): void {
    this.loading = true;
    var apiLink = this.link + query.value;
    this.http.get(apiLink)
    .subscribe((res: Response) => {
      var resultArray = res.json();
      var beerArray = [];
      for (let i = 0; i < resultArray.length; i++) {
          var beer = new Beer(resultArray[i]);
          beerArray.push(beer);
          this.loading = false;
      }
      console.log(beerArray);

      this.beerList = beerArray;
    });
  }

}
