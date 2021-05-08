import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { BrowserModule } from '@angular/platform-browser';
import { PopupService } from './popup.service';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class PopupModule { }
