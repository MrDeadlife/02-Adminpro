import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// ****RUTAS HIJAS***
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      // **Rutas hijas**
      { path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
      { path: 'grafica', component: Grafica1Component, data:{titulo: 'Graficas'} } ,
      { path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'} } ,
      { path: 'account-settings', component: AccountSettingsComponent , data:{titulo: 'Settings'} },
      { path: 'promesas', component: PromesasComponent , data:{titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent , data:{titulo: 'Rxjs'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild -> RUTAS HIJAS
  exports: [RouterModule],
})
export class PagesRoutingModule {}
