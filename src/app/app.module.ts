import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import SignatureComponent from './signature/signature.component';
import {ConnectionComponent} from "./connection/connection.component";
import { DetailedInfosModuleComponent } from './detailed-infos-module/detailed-infos-module.component';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import {InputTextModule} from "primeng/inputtext";
import { LayoutComponent } from './layout/layout.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MessageModule} from "primeng/message";
import { SignaturePanelComponent } from './signature-panel/signature-panel.component';
import { CardModule } from 'primeng/card'
import { ModulesComponent } from './modules/modules.component';
import { QRCodeModule } from 'angular2-qrcode';
import { AuthGuard } from './helpers/authGuard';
import QrcodeComponent from './signature/qrcode/qrcode.component';
import EmailComponent from './signature/email/email.component';
import ManualComponent from './signature/manual/manual.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { OnlineStatusComponent } from './online-status/online-status.component';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DetailedInfosModuleComponent,
    ModulesComponent,
    ConnectionComponent,
    LayoutComponent,
    SignaturePanelComponent,
    SignatureComponent,
    QrcodeComponent,
    EmailComponent,
    ManualComponent,
    OnlineStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ButtonModule,
    TableModule,
    BadgeModule,
    InputSwitchModule,
    FormsModule,
    DropdownModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextareaModule,
    TooltipModule,
    CommonModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    CardModule,
    QRCodeModule,
    CheckboxModule,
    AngularSignaturePadModule,
    ToastModule,
    ChartModule,
    ScrollPanelModule,
    AccordionModule,
    TagModule
  ],
  providers: [ AuthGuard, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
