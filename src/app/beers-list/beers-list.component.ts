import {
 Component,
 EventEmitter,
 Input,
 Output,
 SimpleChanges,
 OnChanges
 } from '@angular/core';
 import { Beer } from '../beer.model';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnChanges{


  @Input() beerList: Beer[];

  @Output() onBeerSelected: EventEmitter<Beer>;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['beerList']){
    }
}



}
