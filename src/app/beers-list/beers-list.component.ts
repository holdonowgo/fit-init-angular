import {
 Component,
 EventEmitter,
 Input,
 Output
 } from '@angular/core';
 import { Beer } from '../beer.model';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent {

  @Input() beerList: Beer[];

  @Output() onBeerSelected: EventEmitter<Beer>;

}
