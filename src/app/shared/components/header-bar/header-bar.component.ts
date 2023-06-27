import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import { News } from 'src/app/core/models/ASnews.model';
import {ASnewsService} from "../../../core/services/ASnews.service";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  loggedUser = true

  // toggleUser() {
  //   this.loggedUser = !this.loggedUser
  // }

  News: News[] = []

  constructor(
    private newsService: ASnewsService,

    private router:Router) {
  }

  navigateToAddDialog() {
    this.router.navigateByUrl('/home/ASCarAdd')
  }

  ngOnInit(): void {
    this.newsService.loadNews()
      .subscribe(newsList => this.News = newsList)
  }



  signOut() {
    this.loggedUser = false
  }

  //Ready for Future Implementation
  signInNavigation() {
    this.router.navigateByUrl('/auth/signin')
    this.loggedUser = true
  }

  signUpNavigation() {
    this.router.navigateByUrl('/auth/signup')
  }

}
