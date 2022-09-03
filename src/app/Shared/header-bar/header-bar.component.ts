import {Component, OnInit} from '@angular/core';
import {News} from "../../Models/news.model";
import {NewsService} from "../../services/news.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./AddBMWDialog/dialog-component";

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

  constructor(private newsService: NewsService,public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
