import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  company: string;
  header: string;
  text: string;
  author: string;

  constructor() {
    // this is nice and all, but this wouldn't be dynamic content. You could just put this in the HTML.
    // Unless of course, your text / author  was going to be dynamic
    this.company = 'IPA-API';
    this.header = 'You Can Always Drink More, But You Can\'t Drink Less';
    this.text = `“Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!`;
    this.author = `-Martin Luther`;
  }

  ngOnInit() {
  }

}
