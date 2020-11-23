import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
// retry operador que intenta ejecutar una accion las veces que se le ordena
// take indica cuantas emiciones del observable necesita ejecutar
// map transforma la data del observable y lo muta de la manera que desee
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  // declarando el retorno de la subcripcion retornaIntervalo() que es un numero iterable
  // Para llamar el unsubs debemos guardar lo que retorna una funcion en una var G
  public intervalSubs: Subscription;
  constructor() {
    /* // aqui tenemos la suscripcion
    this.retornaObservable()
      .pipe(
        // retry (sin declaracion de limite) funciona para hacer un ciclo de intentos
        // retry (con limite) Solo lo intenta las veces que se le indican
        retry(1)
      )
      .subscribe(
        (valor) => console.log('Value', valor),
        // Error
        (error) => console.warn('Error', error),
        // Complete
        () => console.info('obs Terminado')
        ); */

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  // ngOnDestroy elimina observables que siempre emiten valores
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  retornaIntervalo(): Observable<number> {
    // $ marca un observable
    // interval(1000) devuelve un valor cada 1s o (1000)
    // take(4) ejecuta 4 veces el observable
    return interval(100).pipe(
      // take(6),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }
  retornaObservable(): Observable<number> {
    // el observable no se dispara hasta no tener una suscripcion
    let i = -1;
    return new Observable<number>((obServer) => {
      const intervalor = setInterval(() => {
        i++;
        // Emitir el valor siguiente
        obServer.next(i);
        if (i >= 4) {
          // Cerrando el intervalo
          clearInterval(intervalor);
          // Cerrando observable
          obServer.complete();
        }
        if (i === 2) {
          i = 0;
          obServer.error('i llego al valor de dos');
        }
      }, 1000);
    });
  }
}
