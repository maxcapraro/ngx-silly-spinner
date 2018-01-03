import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillySpinnerComponent } from './silly-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SillySpinnerComponent
  ],
  exports: [
    SillySpinnerComponent
  ]
})
export class SillySpinnerModule { }
