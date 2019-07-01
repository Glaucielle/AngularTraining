//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';


const routes : Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroModule' },
    {path: 'consultar', loadChildren: './consultar/consultar.module#ConsultarModule'}
  ];
@NgModule ({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRouting {}
