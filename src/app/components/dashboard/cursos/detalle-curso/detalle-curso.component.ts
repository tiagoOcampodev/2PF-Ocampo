import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss']
})
export class DetalleCursoComponent implements OnInit{
  formulario!: FormGroup;
form: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.formulario = new FormGroup({
        comision: new FormControl(parametros.get('comision')),
        fechaFin: new FormControl(new Date(parametros.get('fechaFin') || '')),
        fechaInicio: new FormControl(new Date(parametros.get('fechaInicio') || '')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta' || false)),
        nombre: new FormControl(parametros.get('nombre'))
      })
    })
  }

  volver() {
    this.router.navigate(['dashboard/lista-cursos']);
  }
}
