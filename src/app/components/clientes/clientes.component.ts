import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  error: string | null = null;
  page: number = 0;
  size: number = 10;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes(this.page, this.size).subscribe({
      next: (data) => {
        this.clientes = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => (this.error = err),
    });
  }

  deleteCliente(email: string): void {
    this.clienteService.deleteCliente(email).subscribe({
      next: () => this.loadClientes(),
      error: (err) => (this.error = err),
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadClientes();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadClientes();
    }
  }
}
