import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ASCarsListComponent} from "./ASCars-list/ASCars-list.component";
import {ASCarsAddComponent} from "./ASCars-add/ASCars-add.component";

const routes:Routes = [
  {
    path:'',
    children: [
      {
        path:'ASCarList',
        component:ASCarsListComponent
      },
      {
        path:'ASCarAdd',
        component:ASCarsAddComponent
      },
      ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule{

}
