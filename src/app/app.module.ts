import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConnectionComponent} from "./connection/connection.component";
import {InputTextModule} from "primeng/inputtext";
import { LayoutComponent } from './layout/layout.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MessageModule} from "primeng/message";
import { CardModule } from 'primeng/card'
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    ConnectionComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
