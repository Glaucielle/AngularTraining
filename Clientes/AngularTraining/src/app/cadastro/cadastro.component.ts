import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder) { }
public clientes: any = {};

  ngOnInit() {
    const clientes = [
      {nome: "Glaucielle Mamede", email:"glauci@gmail.com", endereco: "rua sao joao", telefone: "32421261"},
      {nome: "Fatima Maria", email:"fatima@gmail.com", endereco: "Rua Gerson de barros", telefone: "31830582"},
      {nome: "Joao Victor", email: "jvictor@hotmail.com", endereco: "Rua Fernando Vieira", telefone: "31832220"},
  ]
const clientFy = JSON.stringify(clientes);
localStorage.setItem('ls-clientes',clientFy);

const localClients = localStorage.getItem('ls-clientes');
this.clientes = JSON.parse(localClients);

localStorage.setItem("key","value");

localStorage.clear();

}

}
