import {Component, OnInit} from '@angular/core';
import {News} from "../../Models/news.model";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  loggedUser = true

  toggleUser() {
    this.loggedUser = !this.loggedUser
  }


  News: News[] = []

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.loadNews()
      .subscribe( newsList => this.News = newsList)
  }

  //Ready for Future Implementation
  logout() {
  }

  //Ready for Future Implementation
  login() {
  }

}
