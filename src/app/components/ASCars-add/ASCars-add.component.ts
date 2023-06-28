import {Component, OnDestroy, OnInit} from '@angular/core';
import {AScarsService} from "../../core/services/AScars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ad} from "../../shared/interfaces/ads.interface";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-ASCars-add',
  templateUrl: './ASCars-add.component.html',
  styleUrls: ['./ASCars-add.component.scss']
})
export class ASCarsAddComponent implements OnInit,OnDestroy {
  subs: Subscription[] = []
  bmwForm: FormGroup;

  private Ads: Ad[] = [
    {
      title: 'Mercedes AD',
      description: 'Mercedes CLS 2015 AMG EDITION 200.000$',
      source: 'https://group-media.mercedes-benz.com/marsMediaSite/scr/1459409669000/7998852v1tv3m3/D248074.jpg'
    },
    {
      title: 'BMW AD',
      description: 'BMW 6 Series M POWER 250.000$',
      source: 'https://i.pinimg.com/originals/2a/ea/5d/2aea5dc44c5cfab452d1c91fcaaf8037.jpg'
    },
  ]


  constructor(
    private bmwService: AScarsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.bmwForm = new FormGroup({
        img: new FormControl('', [Validators.required]),
        cModel: new FormControl('', [Validators.required]),
        generation: new FormControl('', [Validators.required]),
        engineCm3: new FormControl('', [Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
        engineKWH: new FormControl('', [Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
        engineCombustion: new FormControl('', [Validators.required]),
        YOP: new FormControl('', [Validators.required]),
        bodyType: new FormControl('', [Validators.required]),
        power: new FormControl('', [Validators.required, Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
        description: new FormControl('', [Validators.required,Validators.maxLength(300)]),
        category: new FormControl('', [Validators.required])
      })
  }

  ngOnInit(): void {}

  ngOnDestroy() :void{
    this.subs.length > 0 && this.subs.forEach((s:Subscription) => s.unsubscribe())
  }

  sendForm(): void {
    this.subs.push(this.bmwService.addASCar(this.bmwForm.value).subscribe())
    console.log('Object pushed: ',this.bmwForm.value);
  }
  get AD() {
    return this.Ads
  }

  navigateBack():void{
    this.router.navigate(['../'])
  }
}
