import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private usuarios: Usuario[] = [
    {'nombre': 'Tiago', curso: 'React', comision: '45212', email: 'tiago@gmail.com'},
    {'nombre': 'Juan', curso: 'Java', comision: '34531', email: 'juan@gmail.com'},
    {'nombre': 'Pedro', curso: 'Angular', comision: '36353', email: 'pedro@gmail.com'},
  ];

  cargarUsuario() {
    return this.usuarios.slice();
  }
}
