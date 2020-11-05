import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // pathPages: 'PagesRoutingModule'
  // pathAuth: 'AuthRoutingModule'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // ***RUTAS HIJAS IMPORTADAS***
    PagesRoutingModule,
    AuthRoutingModule,
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
