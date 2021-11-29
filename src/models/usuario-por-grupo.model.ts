import {Entity, model, property} from '@loopback/repository';

class Nota {
  corte:string;
  valor:number;
}
@model()
export class UsuarioPorGrupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  usuarioId: string;

  @property({
    type: 'array',
    require : true,
    itemType: 'object',
  })
  calificaciones?: Nota[];

  @property({
    type: 'string',
    required: true,
  })
  grupoId: string;


  constructor(data?: Partial<UsuarioPorGrupo>) {
    super(data);
  }
}

export interface UsuarioPorGrupoRelations {
  // describe navigational properties here
}

export type UsuarioPorGrupoWithRelations = UsuarioPorGrupo & UsuarioPorGrupoRelations;
