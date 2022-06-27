import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from "./connection/connection.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./helpers/authGuard";

const routes: Routes = [
  {path: 'connect', component: ConnectionComponent},
  {path: '', component: AppComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
