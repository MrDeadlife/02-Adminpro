import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Hace que el formulario no recargue al precionar el boton submit */
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [LoginComponent, RegistroComponent],
})
export class AuthModule {}
