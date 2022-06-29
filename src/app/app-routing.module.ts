import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionComponent} from "./connection/connection.component";
import { DetailedInfosModuleComponent } from './detailed-infos-module/detailed-infos-module.component';
import {AuthGuard} from "./helpers/authGuard";
import {ModulesComponent} from "./modules/modules.component";
import { EmargementComponent } from './emargement/emargement/emargement.component';

const routes: Routes = [
  {path: '',  redirectTo: 'modules', pathMatch: 'full' },
  {path: 'connect', component: ConnectionComponent},
  {path: 'modules', component: ModulesComponent, canActivate: [AuthGuard]},
  { path: 'emargement', component: EmargementComponent, canActivate: [AuthGuard]},
  { path: 'module/:id', component: DetailedInfosModuleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
