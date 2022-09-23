import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AddDialogComponent} from "./Components/ASCarsAddDialog/add-dialog-component";
import {BmwListComponent} from "./Components/bmw-list/bmw-list.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:BmwListComponent}
  // {path:'new',component:AddDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
