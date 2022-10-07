import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RouterModule} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        AuthRoutingModule,
        CardModule,
    ]
})
export class AuthModule {
}
