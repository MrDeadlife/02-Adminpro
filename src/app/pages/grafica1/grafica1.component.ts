import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component {
  titulos = 'Titulo1';

  public Label1: string[] = [
    'Pupusas Queso',
    'Pupusas Mixtas',
    'Pupusas Frijol&Queso',
  ];
  public data1 = [50, 20, 5];
}
