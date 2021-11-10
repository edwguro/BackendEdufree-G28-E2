import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asignatura} from './asignatura.model';

@model()
export class ProgramaAcademico extends Entity {
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
  Nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'number',
    required: true,
  })
  duracion: number;

  @property({
    type: 'string',
    required: true,
  })
  modalidad: string;

  @property({
    type: 'string',
    required: true,
  })
  jornada: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  creditos: number;

  @hasMany(() => Asignatura)
  asignaturas: Asignatura[];

  constructor(data?: Partial<ProgramaAcademico>) {
    super(data);
  }
}

export interface ProgramaAcademicoRelations {
  // describe navigational properties here
}

export type ProgramaAcademicoWithRelations = ProgramaAcademico & ProgramaAcademicoRelations;
