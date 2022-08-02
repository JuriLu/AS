import {Component, Input, OnInit} from '@angular/core';
import {BmwModel} from "../../Models/bmw.model";

@Component({
  selector: 'app-bmw-list',
  templateUrl: './bmw-list.component.html',
  styleUrls: ['./bmw-list.component.scss']
})
export class BmwListComponent implements OnInit {
 @Input() category: string

  newModels: BmwModel[] = []
  oldSchool: BmwModel[] = []


  BMWs: BmwModel[] = [
    {
      img: 'assets/m4f32.jpg',
      cModel: 'M4',
      generation: 'F32',
      engineCm3: 2979,
      engineCombustion: 'petrol',
      YOP: 2013,
      bodyType: 'coupe',
      power: 425,
      description: '"With a fuel consumption of 8.8 litres/100km - 32 mpg UK - 27 mpg US (Average)," \n' +
        '  " 0 to 100 km/h (62mph) in 4.3 seconds, a maximum top speed of 155 mph (250 km/h), a " \n' +
        '  "curb weight of 3466 lbs (1572 kgs), the F32 4 Series Coupe M4 has a turbocharged Inline 6 " \n' +
        '  "cylinder engine, Petrol motor."',
      category: 'NewModels'
    },
    {
      img: 'assets/m4f32.jpg',
      cModel: 'M4',
      generation: 'F32',
      engineCm3: 2979,
      engineCombustion: 'petrol',
      YOP: 2013,
      bodyType: 'coupe',
      power: 425,
      description: '"With a fuel consumption of 8.8 litres/100km - 32 mpg UK - 27 mpg US (Average)," \n' +
        '  " 0 to 100 km/h (62mph) in 4.3 seconds, a maximum top speed of 155 mph (250 km/h), a " \n' +
        '  "curb weight of 3466 lbs (1572 kgs), the F32 4 Series Coupe M4 has a turbocharged Inline 6 " \n' +
        '  "cylinder engine, Petrol motor."',
      category: 'NewModels'
    },
    {
      img: 'assets/m3 e36.jpg',
      cModel: 'M3',
      generation: 'E36',
      engineCm3: 3201,
      engineCombustion: 'petrol',
      YOP: 1995,
      bodyType: 'coupe',
      power: 321,
      description: 'In 1992, BMW M launched the next generation of its BMW M3 high-performance sports coupe. ' +
        'It was notable for its modern design, significantly higher power and increased comfort. On closer inspection, ' +
        'however, sports car fans quickly realised that the M3 E36 carried the same M specific motorsport DNA as its predecessor.' +
        ' Let’s take a closer look at the first BMW M3 to feature a six-cylinder engine.',
      category: 'OldSchool'
    },
  ]


  constructor() {
  }

  ngOnInit(): void {
    this.newModels = this.BMWs.filter(bmw => bmw.category === 'NewModels')
    this.oldSchool = this.BMWs.filter(bmw => bmw.category === 'OldSchool')
  }


}
