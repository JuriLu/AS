import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  category:string = ''

  onOldSchool(){
    this.category = 'OldSchool'
  }

  onNewModels(){
    this.category = 'NewModels'
  }

}
