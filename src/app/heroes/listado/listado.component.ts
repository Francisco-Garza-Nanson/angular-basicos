// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
// export class ListadoComponent implements OnInit {
export class ListadoComponent {

  // constructor() {
  //   console.log('constructor');
  //  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];

  // Mi solución
  // heroeb: any = "";

  // Solución del maestro
  heroeb: string = '';

  // Problema *ngIf mi solución
  // borro: boolean = false;

  // Problema *ngIf solución del maestro
  heroeBorrado: string = '';

  borrarHeroe() {
    // Solución del maestro
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    // Mi solución
    //this.heroeb = heroeBorrado;

    // Solución del maestro
    //this.heroeb = this.heroeBorrado || '';

    // Mi solución
    //this.borro = (heroeBorrado != undefined)?true:false;

    // if (heroeBorrado != undefined) {
    // this.borro = true;
    // }else{
    //   this.borro = false;
    // }


  }

}
