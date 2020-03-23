import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from './../cliente.model';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

  clientes: Cliente[];
  clientes$: Observable<Cliente[]>;
  clientesSubscription: Subscription;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }

}
