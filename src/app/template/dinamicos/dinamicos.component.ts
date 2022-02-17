import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito [];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'hector',
    favoritos: [
      { id: 1, nombre: 'halo'},
      { id: 2, nombre: 'horizon'},

    ]
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  guardar() {
    console.log('formulario posteado', this.miFormulario);
    
  }

  eliminar(index : number) {
    this.persona.favoritos.splice(index, 1)

  }

  agregar() {
    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito});
    this.nuevoJuego = ''
    
  }

}
