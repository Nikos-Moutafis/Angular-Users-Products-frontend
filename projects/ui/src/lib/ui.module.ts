import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiComponent } from './ui.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [UiComponent, DropdownComponent],
  imports: [RouterModule, BrowserModule],
  exports: [UiComponent, DropdownComponent],
})
export class UiModule {}
