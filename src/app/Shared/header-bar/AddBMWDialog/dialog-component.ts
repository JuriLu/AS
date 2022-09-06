import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BmwService} from "../../../services/bmw.service";


@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  bmwForm: FormGroup;

  constructor(private bmwService:BmwService) {
    this.bmwForm = new FormGroup({
      img: new FormControl('',[Validators.required]),
      cModel: new FormControl('',[Validators.required]),
      generation: new FormControl('',[Validators.required]),
      engineCm3: new FormControl('',[Validators.required,Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      engineKWH: new FormControl('',[Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      engineCombustion: new FormControl('',[Validators.required]),
      YOP: new FormControl('',[Validators.required]),
      bodyType: new FormControl('',[Validators.required]),
      power: new FormControl('',[Validators.required,Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      description: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
    })
  }

  sendForm(){
    this.bmwService.AddBmw(this.bmwForm.value).subscribe()
    console.log(this.bmwForm.value);
  }
}
