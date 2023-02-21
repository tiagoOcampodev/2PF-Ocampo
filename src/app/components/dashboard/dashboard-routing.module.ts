import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './cursos/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'inicio', component: InicioComponent},
    {path: 'lista-cursos', component: ListaCursosComponent},
    {path: 'editar-curso', component: EditarCursoComponent},
    {path: 'agregar-curso', component: AgregarCursoComponent},
    {path: 'detalle-curso', component: DetalleCursoComponent},
    {path: 'usuarios', component: UsuariosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
