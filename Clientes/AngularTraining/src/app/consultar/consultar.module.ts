import { ConsultarRouting } from './consultar.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar.component';

@NgModule({
  declarations: [ConsultarComponent],
  imports: [
    CommonModule,
    ConsultarRouting
  ]
})
export class ConsultarModule { }
