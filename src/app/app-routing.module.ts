import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AddDialogComponent} from "./components/ASCarsAddDialog/add-dialog-component";
import {ASCarsListComponent} from "./components/ASCars-list/ASCars-list.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:ASCarsListComponent}
  // {path:'new',component:AddDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
