import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  company = 'Fit-Init';

  header = 'Initiate Your Fitness';

  text = `Fit-Init is here to redifine the way you think about fitness.
          From routines, to excersizes, to complex charts mapping your progress and training,
          fit init provides the solutions you need to get fit now!
          Fit-Init Dashboard uses state of the art tracking technology and complex data mapping to give you all you need to formulate your ideal routine.
          In addition we have routines, exercises and more to get you started.
          Whether you want to loose 200lbs or get 1st place in that turkey trot 5k, fit-init provides the tools to get you there.
          What are you waiting for?!`;

  toggleSideBar(): void {
    $('.ui.sidebar').sidebar('toggle');
  }

  ngOnInit() {
  }

}
