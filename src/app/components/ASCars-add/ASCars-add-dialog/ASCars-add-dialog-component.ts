import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AScarsService} from "../../../core/services/AScars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AScarsModel} from "../../../core/models/AScars.model";
import {EngCodeEnum, EngTypeEnum} from "../../../shared/enum/engType.enum";

interface engType {
  name: string,
  code: string
}

@Component({
  selector: 'app-ASCars-dialog-component',
  templateUrl: 'ASCars-add-dialog-component.html',
  styleUrls: ['./ASCars-add-dialog.component.scss'],
})
export class ASCarsAddDialogComponent implements OnDestroy,OnInit{
  subs:Subscription[] = []
  bmwForm: FormGroup;
  engType!: engType[];


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
    this.engType = [
      { name: EngTypeEnum.DIESEL, code: EngCodeEnum.DIESEL },
      { name: EngTypeEnum.PETROL, code: EngCodeEnum.PETROL },
      { name: EngTypeEnum.HYBRID, code: EngCodeEnum.HYBRID },
      { name: EngTypeEnum.ELECTRIC, code: EngCodeEnum.ELECTRIC },
    ];
  }

  ngOnDestroy() :void{
    this.subs.length > 0 && this.subs.forEach((s:Subscription) => s.unsubscribe())
  }

  sendForm(): void {
    const obj:AScarsModel = {
      img:this.bmwForm.get('img').value,
      cModel:this.bmwForm.get('cModel').value,
      generation:this.bmwForm.get('generation').value,
      engineCm3:this.bmwForm.get('engineCm3').value,
      engineKWH:this.bmwForm.get('engineKWH').value,
      engineCombustion:this.bmwForm.get('engineKWH').value[0].name,
      YOP:this.bmwForm.get('YOP').value,
      bodyType:this.bmwForm.get('bodyType').value,
      power:this.bmwForm.get('power').value,
      description:this.bmwForm.get('description').value,
      category:this.bmwForm.get('category').value,
    }

    this.subs.push(this.bmwService.addASCar(obj).subscribe())
    console.log('Object pushed: ',obj);
  }

  closeModal(): void {
    this.visible = false
    this.router.navigate(['../'])
  }

  showDialog(): void {
    this.visible = true;
  }
}
