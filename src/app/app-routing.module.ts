import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from "./connection/connection.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./helpers/authGuard";
import {ModulesComponent} from "./modules/modules.component";

const routes: Routes = [
  {path: 'connect', component: ConnectionComponent},
  {path: 'modules', component: ModulesComponent, canActivate: [AuthGuard]},
  {path: '', component: AppComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
