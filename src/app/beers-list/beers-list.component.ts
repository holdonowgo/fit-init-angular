import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterContentInit,
  AfterViewInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import $ from 'jquery';
import { Beer } from '../beer.model';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})

export class BeersListComponent implements OnInit, OnChanges {

  @Input() beerList: Beer[];

  @Output() onBeerSelected: EventEmitter<Beer>;

  constructor() {
  }

  ngOnInit() {

  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['beerList']) {
    }
  }
}
