import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { ImplantacaoComponent } from './implantacao/implantacao.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TabsMenuComponent,
    DashboardComponent,
    EmpresasComponent,
    AdministradoresComponent,
    ImplantacaoComponent,
    RelatoriosComponent,
    ComunicacaoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'administradores', component: AdministradoresComponent },
      { path: 'implantacao', component: ImplantacaoComponent },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: 'comunicacao', component: ComunicacaoComponent },
    ]),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
