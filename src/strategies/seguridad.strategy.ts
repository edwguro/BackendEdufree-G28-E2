import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { UserProfile } from "@loopback/security";
import parseBearerToken from "parse-bearer-token";
import { SeguridadService } from "../services";
import { HttpErrors, Request } from "@loopback/rest"



export class EstrategiaSeguridad implements AuthenticationStrategy {
    name: string = "seguridad";

    constructor(
        @service(SeguridadService) public servicioSeguridadService: SeguridadService,
    ){

    }
  async authenticate(request: Request): Promise<UserProfile | undefined> {
        
        const token = parseBearerToken(request);

        if (token) {
          const respuestaVerificacion = this.servicioSeguridadService.VerificarToken(token);
                if (respuestaVerificacion) {
                    const usuario : UserProfile= Object.assign(
                        {},
                    respuestaVerificacion.data
                    );
                    return usuario;
                                       
                    
                } else {
                    throw new HttpErrors[401]("Token invalido."); 
                }
        }else{
            throw new HttpErrors[401]("Solicitud sin token actual.");
        }
    }
   
    
}