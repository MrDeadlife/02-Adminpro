import { NgModule } from '@angular/core';
/* install */
import { ChartsModule } from 'ng2-charts';

/* Components generated */
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FormsModule } from '@angular/forms';
import { DonutsComponent } from './donuts/donuts.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    NopagefoundComponent,
    DonutsComponent,
    DonutsComponent,
  ],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementadorComponent, NopagefoundComponent, DonutsComponent],
})
export class ComponentsModule {}
