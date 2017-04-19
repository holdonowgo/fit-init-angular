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
  beers: Beer[];

  @Input() beerList: Beer[];

  @Output() onBeerSelected: EventEmitter<Beer>;

  constructor() {
    this.beers = [
      new Beer({
        "id": "P4rUoI",
        "name": "Half Acre Lager",
        "abv": "5.2",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/P4rUoI/upload_KG1vKO-medium.png",
        "description": "Half Acre Lager was the first beer released by Half Acre Beer Co. The Lager will hold a special spot in the history or Half Acre Beer Co, but we moved on. You never know, though.",
        "type_name": "American Lager"
      }),
      new Beer({
        "id": "LBuDKw",
        "name": "Hot Tropic",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/LBuDKw/upload_JgvfNF-medium.png",
        "type_name": "American Pale"
      }),
      new Beer({
        "id": "sHgBrJ",
        "name": "Big Hugs",
        "abv": "10",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/sHgBrJ/upload_9PO5av-medium.png",
        "description": "Big HugsThis beer is a thug. Big and chock full of tender embrace.",
        "type_name": "American Imperial Stout"
      }),
      new Beer({
        "id": "fnouZZ",
        "name": "Anicca",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/fnouZZ/upload_aTGuSm-medium.png",
        "type_name": "American IPA"
      }),
      new Beer({
        "id": "sxAK5r",
        "name": "Senita",
        "abv": "7",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/sxAK5r/upload_iJPeQi-medium.png",
        "description": "Senita is a western charged firecracker. We conjured the classics and then laid them on a bed of pale malt. This India Pale Ale shoots straight to the bitter edge before falling into a mellow haze. Deep gold and ready to travel into the distance.",
        "type_name": "American IPA"
      }),
      new Beer({
        "id": "diJ77A",
        "name": "Baumé",
        "abv": "7",
        "ibu": "60",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/diJ77A/upload_8vsMR6-medium.png",
        "description": "Big, but not huge, this American Chocolate Rye Stout fires off a lot of coffee and chocolate notes. Balances well, but rides high on hop character at 60 IBU's while the Rye finishes it dry.",
        "type_name": "Stout"
      }),
      new Beer({
        "id": "sLkjQ2",
        "name": "Big Hugs",
        "abv": "10",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/sLkjQ2/upload_vSPNnU-medium.png",
        "description": "This beer is a thug. Big and chock full of tender embrace.",
        "type_name": "American Imperial Stout"
      }),
      new Beer({
        "id": "UfTXZT",
        "name": "Magnus",
        "abv": "7",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/UfTXZT/upload_iWVW1h-medium.png",
        "description": "A burly Schwarz beer. Clean, balanced lager with a bitter coffee twinge.",
        "type_name": "Schwarzbier"
      }),
      new Beer({
        "id": "aG5aKe",
        "name": "Sticky Fat",
        "abv": "6.5",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/aG5aKe/upload_RrvZqI-medium.png",
        "description": "Early Fall has farmers picking whole cone hops and shipping them to us to brew a wet hop beer. We kick up a black beer with a very sticky character. Beware of the StickyFat Bear.",
        "type_name": "American Stout"
      }),
      new Beer({
        "id": "xRLW5D",
        "name": "The Chairman",
        "abv": "9.5",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/xRLW5D/upload_O56Saf-medium.png",
        "description": "The Chairman is an Imperial Red Ale created to remember the men and women who worked on Lumpen magazine and became Chairmen of the Boring Theoretical Party (BTP)\r\n\r\nThe Boring Theoretical Party began in the 1990s. It was Lumpen magazine’s response to the boring, and uh, theoretically inclined armchair lefties. We started a “Worker’s Newspaper” edited by Chairman Thar, our beloved leader. Our symbols were the Armadillo and the Hoe. We had a theme song, a salute (raised fist while yawning), and we promoted that everyone should be the Chairman of their own Party.",
        "type_name": "Imperial Red"
      }),
      new Beer({
        "id": "xcV8ou",
        "name": "Tuna",
        "abv": "4.7",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/xcV8ou/upload_kGBVz2-medium.png",
        "description": "In the glinting brilliance of buoyant waters, Golden Tuna sidles up beside us for daylong companionship. A sessionable 4.7%ABV, the Tuna rides along a medium bodied frame before crashing into tropical fruits, a touch of floral, and pine. For those among us familiar with the merit in taking it easy, climb aboard and cut her loose.",
        "type_name": "American Pale"
      }),
      new Beer({
        "id": "QQJY26",
        "name": "Big Hugs",
        "abv": "10",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/QQJY26/upload_tQQA38-medium.png",
        "description": "This beer is a thug. Big and chock full of tender embrace.",
        "type_name": "American Imperial Stout"
      }),
      new Beer({
        "id": "dgLOj6",
        "name": "Galactic Double Daisy Cutter",
        "abv": "8",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/dgLOj6/upload_s95AV7-medium.png",
        "description": "This beer dangles in the brackish waters of modern day hop farming and youthful brewing. Australian hop producers bred a strain that fires out passionfruit and citrus so brewers can stroke brains into island driven sensory showdowns. This Double Daisy Cutter variant is brewed once a year and is well suited for outside dining, wasting time and making fun of your closest friends.",
        "type_name": "Imperial IPA"
      }),
      new Beer({
        "id": "pN3FPY",
        "name": "Quakerbridge Barleywine",
        "abv": "10",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/pN3FPY/upload_tpOg4b-medium.png",
        "description": "…this weighty beer is a choose-your-own-adventure experience. Freshly plugged, this beer is a gooney 10% hop guster to bring your holiday retreat to its knees, but time allows this brew to round and settle into an ever maltier bomb of balance.",
        "type_name": "American Barleywine"
      }),
      new Beer({
        "id": "MlBdyG",
        "name": "Shrub Tundra",
        "abv": "6.3",
        "label_url": "https://s3.amazonaws.com/brewerydbapi/beer/MlBdyG/upload_5Nj0ib-medium.png",
        "description": "The amalgamate child of two Half Acre passions: beer and coffee. Brewed with loads of Dark Matter coffee, this beer ends up around 3% mood booster. Watch for it in early spring.",
        "type_name": "Coffee Beer"
      })
    ];
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['beerList']) {
    }
    if (changes['beers']) {
      console.log(this.beers)
    }
  }
}
