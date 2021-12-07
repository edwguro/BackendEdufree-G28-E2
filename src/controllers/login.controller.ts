// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import { Credenciales } from '../models';
import { SeguridadService } from '../services';


export class LoginController {
  constructor(
    @service(SeguridadService)
    public servicioSeguridad: SeguridadService,
  ) {}
    
  @post('/autenticar', {
    responses: {
      '200': {
        description: 'ok',
      },
    },
  })
  async login(@requestBody() credenciales: Credenciales) {

    let usuarioEncontrado = await this.servicioSeguridad.validarUsuario(
      credenciales,
    );

    if (usuarioEncontrado) {
      const token = await this.servicioSeguridad.GenerarToken(usuarioEncontrado);
      if (token) {
        return {
          data:usuarioEncontrado,
          tk: token
        };
      } else {
        throw new HttpErrors[401]('Datos no encontrados');
      }
    } else {
      throw new HttpErrors[401]('Datos erroneos');
    };
  }


}
