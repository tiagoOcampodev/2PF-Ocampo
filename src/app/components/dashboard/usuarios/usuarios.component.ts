import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  title: string = 'Usuarios';

  usuarios: Usuario[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private usuarioService: UsuarioService
    ){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.usuarios = this.usuarioService.cargarUsuario();
  }

  model:any = {};
  model2:any = {};
  hideUpdate: boolean = true;

  addEmployee(): void{
    this.usuarios.push(this.model);
    this._snackBar.open('Usuario añadido', '', {
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  }
  
  deleteEmployee(i:any): void{
    var answer = confirm('Estas seguro?');
    if(answer) {
      this.usuarios.splice(i, 1);

      this._snackBar.open('Usuario eliminado', '', {
        duration: 5000,
        horizontalPosition:'center',
        verticalPosition: 'bottom'
      })
    }
  }
  
  myValue:any;
  editEmployee(i:any): void {
    this.hideUpdate = false;
    this.model2.nombre = this.usuarios[i].nombre;
    this.model2.curso = this.usuarios[i].curso;
    this.model2.comision = this.usuarios[i].comision;
    this.model2.email = this.usuarios[i].email;
    this.myValue = i;
  }

  updateEmployee(): void{
    let i = this.myValue;
    for(let j = 0; j < this.usuarios.length; j++){
      if(i == j){
        this.usuarios[i] = this.model2;
        this.model2 = {};
      }
    }
    this._snackBar.open('Datos actualizados', '', {
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  }
}
