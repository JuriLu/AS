import { Component } from '@angular/core';
import {Ad} from "../ASCars-add/ASCars-add.component";

@Component({
  selector: 'app-ascars-ads',
  templateUrl: './ascars-ads.component.html',
  styleUrls: ['./ascars-ads.component.scss']
})
export class ASCarsAdsComponent {
  public Ads:Ad[]=[
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

}
