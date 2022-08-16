import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  category: string = 'NewModels'

  onOldSchool() {
    this.category = 'OldSchool'
  }

  onNewModels() {
    this.category = 'NewModels'
  }

  onLegendary() {
    this.category = 'Legendary'
  }

  onLeMans() {
    this.category = 'LeMans'
  }

  onGoldenDecade() {
    this.category = 'GoldenDecade'
  }

  onNewMillenial() {
    this.category = 'NewMillenial'
  }

  onBikes(){
    this.category = 'Bikes'
  }

}
