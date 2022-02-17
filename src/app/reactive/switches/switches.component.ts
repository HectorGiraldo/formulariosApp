import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificacion: [true, Validators.required],
    termino: [false, Validators.requiredTrue],

  });

  persona = {
    genero: 'F',
    notificacion: true,
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      ...this.persona,
      termino: true
    });

    this.miFormulario.valueChanges.subscribe( ({termino, ...rest}) => {
      this.persona = rest;
      console.log(rest);
      
    })
  }

  guardar() {

   const formValue =  {...this.miFormulario.value}
   delete formValue.termino

   this.persona = formValue
   console.log(formValue);
   
  }

}
