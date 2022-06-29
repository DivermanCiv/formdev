import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { DetailedInfosModuleComponent } from './detailed-infos-module/detailed-infos-module.component';
import { AuthGuard } from './helpers/authGuard';
import { ModulesComponent } from './modules/modules.component';
import SignatureComponent from './signature/signature.component';
import QrcodeComponent from './signature/qrcode/qrcode.component';
import ManualComponent from './signature/manual/manual.component';
import EmailComponent from './signature/email/email.component';

const routes: Routes = [
  {path: '', redirectTo: 'modules', pathMatch: 'full'},
  {path: 'connect', component: ConnectionComponent},
  {path: 'modules', component: ModulesComponent, canActivate: [AuthGuard]},
  {path: 'module/:id', component: DetailedInfosModuleComponent, canActivate: [AuthGuard]},
  {
    path: 'module/:id/signature', component: SignatureComponent, canActivate: [AuthGuard],
    children: [
      {path: 'qrcode', component: QrcodeComponent},
      {path: 'manual', component: ManualComponent},
      {path: 'email', component: EmailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
