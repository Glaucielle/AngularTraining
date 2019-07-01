import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRouting } from './cadastro.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
