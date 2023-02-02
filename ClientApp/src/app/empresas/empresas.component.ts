import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  displayedColumns: string[] = ['razaoSocial', 'cnpj', 'cadastroDate', 'vencimento', 'status'];
  dataSource = new MatTableDataSource<EmpresasProps>(ELEMENT_DATA);

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
export interface EmpresasProps {
  razaoSocial: string;
  cnpj: string;
  cadastroDate: string;
  cadastroTime: string;
  vencimento: string;
  status: boolean;
}
const ELEMENT_DATA: EmpresasProps[] = [
  { razaoSocial: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", cadastroDate: "11/10/2022", cadastroTime: "10:40", vencimento: "23/11/2023", status: true },
  { razaoSocial: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", cadastroDate: "11/10/2022", cadastroTime: "10:40", vencimento: "23/11/2023", status: true },
  { razaoSocial: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", cadastroDate: "11/10/2022", cadastroTime: "10:40", vencimento: "23/11/2023", status: false },
  { razaoSocial: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", cadastroDate: "11/10/2022", cadastroTime: "10:40", vencimento: "23/11/2023", status: false },
  { razaoSocial: "Mendes & Camargo Ltda", cnpj: "07.010.529/0001-35", cadastroDate: "11/10/2022", cadastroTime: "10:40", vencimento: "23/11/2023", status: false },
];
