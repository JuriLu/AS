import {Component, OnInit} from '@angular/core';
import {News} from "../../Models/news.model";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {


  News: News[] = [
    {
      header: 'News 2',
      content: 'This is news number 1 for an bmw model',
    },
    {
      header: 'News 3',
      content: 'This is news number 2 for an bmw model',
    },
    {
      header: 'News 4',
      content: 'This is news number 3 for an bmw model',
    },
    {
      header: 'News 5',
      content: 'This is news number 4 for an bmw model',
    },
    {
      header: 'News 6',
      content: 'This is news number 5 for an bmw model',
    },
    {
      header: 'News 7',
      content: 'This is news number 5 for an bmw model',
    },
    {
      header: 'News 8',
      content: 'This is news number 5 for an bmw model',
    },
    {
      header: 'News 9',
      content: 'This is news number 5 for an bmw model',
    },

  ]

  constructor() {
  }

  ngOnInit(): void {



  }


}
