import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {NgModule} from "@angular/core";

const routes:Routes = [
  {
    path: '',
    children:[
      {
        path:'signin',
        component:SignInComponent
      },
      {
        path:'signup',
        component:SignUpComponent
      }]
  }];


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AuthRoutingModule{

}
