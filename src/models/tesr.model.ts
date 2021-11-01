import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tesr extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  hf: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  fre?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tesr>) {
    super(data);
  }
}

export interface TesrRelations {
  // describe navigational properties here
}

export type TesrWithRelations = Tesr & TesrRelations;
