import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionComponent} from "./connection/connection.component";
import { DetailedInfosModuleComponent } from './detailed-infos-module/detailed-infos-module.component';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./helpers/authGuard";
import {ModulesComponent} from "./modules/modules.component";

const routes: Routes = [
  {path: 'connect', component: ConnectionComponent },
  {path: 'modules', component: ModulesComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  {path: '',  redirectTo: 'modules', pathMatch: 'full' },
  { path: 'module/:id', component: DetailedInfosModuleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
