import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css'],
})
export class ClienteDetalhesComponent implements OnInit {
  cliente: any = null;
  error: string | null = null;
  mostrarSaldo: boolean = true;
  mostrarDetalhes: boolean = true;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.clienteService.getCliente(email).subscribe({
        next: (data) => (this.cliente = data),
        error: (err) => (this.error = err),
      });
    } else {
      this.error = 'Email não fornecido na URL';
    }
  }

  toggleVisibility(): void {
    this.mostrarDetalhes = !this.mostrarDetalhes;
  }
}
