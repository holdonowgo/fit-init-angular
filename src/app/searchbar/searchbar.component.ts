import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  http: Http;
  link = `http://the-ipa-api.herokuapp.com/ipa-api/search?name=`;

  constructor(http: Http) {
    this.http = http
}

  ngOnInit() {
  }

  performSearch(query: HTMLInputElement): void {
    var apiLink = this.link + query.value;
    console.log(apiLink);
    this.http.get(`http://the-ipa-api.herokuapp.com/ipa-api/search?name=${apiLink}`)
    .subscribe((res: Response) => {
      console.log(res.json());
    });
  }

}
