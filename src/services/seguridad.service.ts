import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Credenciales, Usuario } from '../models';
import { UsuarioRepository } from '../repositories';

const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class SeguridadService {

  llaveSecreta = '@209393ssjsjsj23@';

  constructor(
     @repository(UsuarioRepository) public usuarioRepositorio:UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */
  // validar que un usuario exista
  // generar token
  // verificar que un token sea validator

  async validarUsuario(credenciales:Credenciales){

    try {
      let usuarioEncontrado = await this.usuarioRepositorio.findOne(
        {
          where: {
            correo: credenciales.correo,
            contrasena: credenciales.contrasena

          }
        }
      );

      if ( usuarioEncontrado){
        
          return;

      } else{
        return false;
      }
      
    } catch (error) {
      
    }
    
  } 

  async GenerarToken(usuario:Usuario){
    try {
      const token = jwt.sign({
        email: usuario.correo,
        nombre: usuario.nombres

      },this.llaveSecreta);
      return token;
    } catch (error) {
      return false;
    }
    
  }
  VerificarToken(token:string){
    try {
      const datos = jwt.verify(token, this.llaveSecreta);
      return datos;
    } catch (error) {
      
    }

  }
}
