import { Component, OnInit } from '@angular/core';
import {AddDialogComponent} from "./add-dialog/add-dialog-component";
import {MatDialog} from "@angular/material/dialog";
import {AScarsService} from "../../core/services/AScars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ASCars-add',
  templateUrl: './ASCars-add.component.html',
  styleUrls: ['./ASCars-add.component.scss']
})
export class ASCarsAddComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private ASCarsService: AScarsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.ASCarsService.loadBMWByCategory('NewModel').subscribe()
      this.router.navigateByUrl('home/ASCarList')
    });
  }

}
