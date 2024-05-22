import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-transacao',
  templateUrl: './cliente-transacao.component.html',
  styleUrls: ['./cliente-transacao.component.css'],
})
export class ClienteTransacaoComponent implements OnInit {
  transacao: any = {
    valor: null,
    tipoTransacao: 'CREDITO',
    emailDestino: '',
  };
  error: string | null = null;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    this.transacao.emailDestino = email;
  }

  saveTransacao(): void {
    if (this.transacao.valor <= 0) {
      this.error = 'O valor deve ser maior que zero';
      return;
    }
    this.clienteService.createTransacao(this.transacao).subscribe({
      next: () => this.router.navigate(['/clientes']),
      error: (err) => (this.error = err),
    });
  }
}
