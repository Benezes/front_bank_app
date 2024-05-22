import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteTransacaoComponent } from './components/cliente-transacao/cliente-transacao.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente-detalhes/:email', component: ClienteDetalhesComponent },
  { path: 'cliente-form', component: ClienteFormComponent },
  { path: 'cliente-form/:email', component: ClienteFormComponent },
  { path: 'cliente-transacao/:email', component: ClienteTransacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
