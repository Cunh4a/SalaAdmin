import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'desc', 'emp', 'criado','att'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  valuesDashboard = [
    { value: "10k", info: "Empresas ativas" },
    { value: "400", info: "Empresas inativas" },
    { value: "1,1M", info: "Relatórios" },
    { value: "20M", info: "Novos colaboradores" },
    { value: "2k", info: "Contratos" },
  ]

  empresasVencimento = [
    { name: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", date: "19/02/2023" },
    { name: "Oliveira Pneus", cnpj: "12.012.873/0001-12", date: "10/03/2023" },
    { name: "Nauffal Cars", cnpj: "17.111.420/0001-38", date: "05/02/2023" },
    { name: "Sweet Doces", cnpj: "07.010.529/0001-35", date: "28/03/2023" },
    { name: "Pianos Musics", cnpj: "29.015.894/0001-38", date: "01/04/2023" },
    { name: "Sports Radical", cnpj: "97.432.134/0001-44", date: "12/05/2023" },
  ]
}

/* Static data */
export interface PeriodicElement {
  nome: string;
  desc: string;
  emp: string;
  criado: string;
  criadoTime: string;
  att: string;
  attTime: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { nome: "Contrato de Trabalho - Geral", desc: "CT - Geral PMA", emp: "Lugarh - HOM", criado: "11/10/2022", criadoTime: "10:40", att: "23/11/2023", attTime: "15:10" },
  { nome: "Contrato de Viagens", desc: "CT - Parcial PMA", emp: "BNE", criado: "22/02/2020", criadoTime: "11:10", att: "30/03/2021", attTime: "16:40" },
  { nome: "Contrato de PJ", desc: "CT - Geral PMA", emp: "Employer", criado: "12/06/2020", criadoTime: "08:20", att: "01/05/2021", attTime: "12:30" },
  { nome: "Contrato com variáveis", desc: "CT - Parcial PMA", emp: "Lugarh - HOM", criado: "18/10/2019", criadoTime: "10:40", att: "18/10/2021", attTime: "11:55" },
];
