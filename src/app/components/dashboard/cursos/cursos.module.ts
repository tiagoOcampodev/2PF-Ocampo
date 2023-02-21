import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanoEstiloDirective } from 'src/app/directives/booleano-estilo.directive';
import { BooleanoATextoPipe } from 'src/app/pipes/booleano-a-texto.pipe';
import { SharedModule } from '../../shared/shared.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from './services/cursos.service';
import { Router } from '@angular/router';
import { FormatoFechaPipe } from 'src/app/pipes/formato-fecha.pipe';

@NgModule({
  declarations: [
    BooleanoEstiloDirective,
    BooleanoATextoPipe,
    FormatoFechaPipe,
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    DetalleCursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
