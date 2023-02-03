import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'desc', 'status', 'error', 'dataCriacao'];
  dataSource = new MatTableDataSource<RelatoriosProps>(ELEMENT_DATA);

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
export interface RelatoriosProps {
  nome: string;
  desc: string;
  status: string;
  error: string;
  dataCriacao: string;
}
const ELEMENT_DATA: RelatoriosProps[] = [
  { nome: "Relatório Mensal Share", desc: "Relatório Mensal Share - Período 01/09/2022 17:16 a 29/09/2022 17:16", status: "Concluído", error: "", dataCriacao: "11/10/2022 10:40" },
  { nome: "Relatório Mensal Share", desc: "Relatório Mensal Share - Período 01/09/2022 17:16 a 29/09/2022 17:16", status: "Concluído", error: "", dataCriacao: "22/02/2020 11:10" },
  { nome: "Relatório Mensal Share", desc: "Relatório Mensal Share - Período 01/09/2022 17:16 a 29/09/2022 17:16", status: "Concluído", error: "", dataCriacao: "12/06/2020 08:20" },
  { nome: "Relatório Mensal Share", desc: "Relatório Mensal Share - Período 01/09/2022 17:16 a 29/09/2022 17:16", status: "Concluído", error: "", dataCriacao: "18/10/2019 10:40" },
];
