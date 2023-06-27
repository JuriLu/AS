import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AScarsService} from "../../../core/services/AScars.service";

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'dialog-component',
  templateUrl: 'ASCars-add-dialog-component.html',
  styleUrls: ['./ASCars-add-dialog.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ASCarsAddDialogComponent {

  date = new FormControl(moment(), [Validators.required]);

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  bmwForm: FormGroup;

  constructor(private bmwService: AScarsService) {
    this.bmwForm = new FormGroup({
      img: new FormControl('', [Validators.required]),
      cModel: new FormControl('', [Validators.required]),
      generation: new FormControl('', [Validators.required]),
      engineCm3: new FormControl('', [Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      engineKWH: new FormControl('', [Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      engineCombustion: new FormControl('', [Validators.required]),
      YOP: this.date,
      bodyType: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required, Validators.pattern('(\\d{1,}).*(\\d{1,})')]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  sendForm() {
    this.bmwService.addASCar(this.bmwForm.value).subscribe()
    this.bmwService.loadASCarsyCategory('NewModel') //TODO: Change function Name
    console.log(this.bmwForm.value);
  }
}
