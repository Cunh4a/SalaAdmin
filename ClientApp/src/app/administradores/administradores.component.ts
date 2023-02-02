import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'telefone', 'email', 'acoes'];
  dataSource = new MatTableDataSource<AdminProps>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

/* Static data */
export interface AdminProps {
  nome: string;
  telefone: string;
  email: string;
  acoes: boolean;
}
const ELEMENT_DATA: AdminProps[] = [
  { nome: "Rodrigo Souza", telefone: "(41) 98432-3452", email: "rodrigo@gmail.com", acoes: true },
  { nome: "Melissa Antunes Figueira", telefone: "(17) 95323-3455", email: "melissaAnt@hotmail.com", acoes: true },
  { nome: "Roberto Filho", telefone: "(15) 98172-3456", email: "roberto123@gmail.com", acoes: true },
  { nome: "Caio Aguiar Gomes", telefone: "(30) 97345-9988", email: "caioaguiar2023@outlook.com", acoes: true },
  { nome: "Maria Pereita", telefone: "(11) 93456-8721", email: "pereira_maria@gmail.com", acoes: true },
];
