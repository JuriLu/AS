import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AScarsService} from "../../../core/services/AScars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ASCars-dialog-component',
  templateUrl: 'ASCars-add-dialog-component.html',
  styleUrls: ['./ASCars-add-dialog.component.scss'],
})
export class ASCarsAddDialogComponent implements OnDestroy,OnInit{

  subs:Subscription[] = []
  bmwForm: FormGroup;

  visible: boolean = true
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
      YOP: new FormControl('',[Validators.required]),
      bodyType: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required, Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit():void {
  }

  ngOnDestroy() :void{
    this.subs.length > 0 && this.subs.forEach((s:Subscription) => s.unsubscribe())
  }

  sendForm(): void {
    this.subs.push(this.bmwService.addASCar(this.bmwForm.value).subscribe())
    console.log(this.bmwForm.value);
  }

  closeModal(): void {
    this.visible = false
    this.router.navigate(['../'])
  }

  showDialog(): void {
    this.visible = true;
  }
}
