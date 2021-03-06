import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProgramaAcademico} from './programa-academico.model';
import {Grupo} from './grupo.model';

@model()
export class Asignatura extends Entity {
  
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  nombre?: string;

  @property({
    type: 'number',
    required: true,
  })
  creditos: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoPrograma: string;

  @property({
    type: 'number',
    required: true,
  })
  codigoAsignatura: number;

  @property({
    type: 'string',
    required: true,
  })
  areaDeConociemnto: string;

  @belongsTo(() => ProgramaAcademico)
  programaAcademicoId: string;

  @hasMany(() => Grupo)
  grupos: Grupo[];

  constructor(data?: Partial<Asignatura>) {
    super(data);
  }
}

export interface AsignaturaRelations {
  // describe navigational properties here
}

export type AsignaturaWithRelations = Asignatura & AsignaturaRelations;
