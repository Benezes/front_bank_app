import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit {
  cliente: any = {
    nome: '',
    idade: null,
    email: '',
    numeroConta: '',
  };
  error: string | null = null;
  isEdit: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.isEdit = true;
      this.clienteService.getCliente(email).subscribe({
        next: (data) => (this.cliente = data),
        error: (err) => (this.error = err),
      });
    }
  }

  saveCliente(): void {
    if (this.isEdit) {
      this.clienteService
        .updateCliente(this.cliente.email, this.cliente)
        .subscribe({
          next: () => this.router.navigate(['/clientes']),
          error: (err) => (this.error = err),
        });
    } else {
      this.clienteService.createCliente(this.cliente).subscribe({
        next: () => this.router.navigate(['/clientes']),
        error: (err) => (this.error = err),
      });
    }
  }
}
