import { Component, OnInit } from '@angular/core';
import { faCog, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  faSettings = faCog;
  faHelp = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
