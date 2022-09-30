import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AddDialogComponent} from "./components/ASCars-add/add-dialog/add-dialog-component";
import {ASCarsListComponent} from "./components/ASCars-list/ASCars-list.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home/ASCarList'},
  {path:'auth',loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule) },
  {path:'home',loadChildren:()=> import('./components/main.routing.module').then(m=>m.MainRoutingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
