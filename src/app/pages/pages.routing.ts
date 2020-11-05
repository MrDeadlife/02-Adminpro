import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

// ****RUTAS HIJAS***
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      // **Rutas hijas**
      { path: '', component: DashboardComponent },
      { path: 'grafica', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild -> RUTAS HIJAS
  exports: [RouterModule],
})
export class PagesRoutingModule {}
