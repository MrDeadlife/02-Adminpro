import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [ // **Rutas hijas**
      { path: 'dashboard', component: DashboardComponent },
      { path: 'grafica', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'register', component: RegistroComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
