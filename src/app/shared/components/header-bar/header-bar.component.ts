import {Component, OnDestroy, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {News} from 'src/app/core/models/ASnews.model';
import {ASnewsService} from "../../../core/services/ASnews.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  loggedUser: boolean = true
  News: News[] = []
  subs:Subscription[] = []

  constructor(
    private newsService: ASnewsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.newsService.loadNews()
      .subscribe((newsList: News[]) => this.News = newsList)
  }

  ngOnDestroy(): void {
    this.subs.length > 0 && this.subs.forEach((s: Subscription) => s.unsubscribe())
  }
  navigateToAddDialog(): void {
    this.router.navigateByUrl('/home/ASCarAdd')
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

  // toggleUser() {
  //   this.loggedUser = !this.loggedUser
  // }

}
