import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent implements OnInit {
  clientes: any[] = [];
  error: string | null = null;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['/clientes']);
    this.clienteService.getClientes(0, 10).subscribe();
  }
}
