import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

const routes: Routes = [
  // pathPages: 'PagesRoutingModule'
  // pathAuth: 'AuthRoutingModule'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent},
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
