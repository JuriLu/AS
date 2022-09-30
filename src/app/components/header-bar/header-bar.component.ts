import {Component, OnInit} from '@angular/core';
import {News} from "../../core/Models/ASnews.model";
import {ASnewsService} from "../../core/services/ASnews.service";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "../ASCarsAddDialog/add-dialog-component";
import {AScarsService} from "../../core/services/AScars.service";

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

  constructor(
    private newsService: ASnewsService,
    public dialog: MatDialog,
    private bmwService: AScarsService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.bmwService.loadBMWByCategory('NewModel').subscribe()
    });
  }

  ngOnInit(): void {
    this.newsService.loadNews()
      .subscribe(newsList => this.News = newsList)
  }


  //Ready for Future Implementation
  logout() {
  }

  //Ready for Future Implementation
  login() {
  }

}
