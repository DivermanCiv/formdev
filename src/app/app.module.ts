import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmargementComponent } from './emargement/emargement/emargement.component';
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
import { AuthGuard } from './helpers/authGuard';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import { CalendarComponent } from './calendar/calendar.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DetailedInfosModuleComponent,
    ModulesComponent,
    LayoutComponent,
    SignaturePanelComponent,
    EmargementComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    FullCalendarModule,
    CheckboxModule,
    TabViewModule,
    ScrollPanelModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
