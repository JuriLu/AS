import {Component, OnInit} from '@angular/core';
import {AddDialogComponent} from "./add-dialog/add-dialog-component";
import {MatDialog} from "@angular/material/dialog";
import {AScarsService} from "../../core/services/AScars.service";
import {Router} from "@angular/router";

export interface Ad {
  title:string;
  description:string;
  source:string
}

@Component({
  selector: 'app-ASCars-add',
  templateUrl: './ASCars-add.component.html',
  styleUrls: ['./ASCars-add.component.scss']
})
export class ASCarsAddComponent implements OnInit {

  private Ads:Ad[]=[
    {
      title:'Mercedes AD',
    description:'Mercedes CLS 2015 AMG EDITION 200.000$',
      source:'https://group-media.mercedes-benz.com/marsMediaSite/scr/1459409669000/7998852v1tv3m3/D248074.jpg'
    },
    {
      title:'BMW AD',
      description:'BMW 6 Series M POWER 250.000$',
      source:'https://i.pinimg.com/originals/2a/ea/5d/2aea5dc44c5cfab452d1c91fcaaf8037.jpg'
    },
  ]


  constructor(
    public dialog: MatDialog,
    private ASCarsService: AScarsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.ASCarsService.loadASCarsyCategory('NewModel').subscribe() //TODO: Change function Name
      this.router.navigateByUrl('home/ASCarList')
    });
  }

  get AD(){
    return this.Ads
  }



}
