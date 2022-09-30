export type engComb = 'diesel' | 'petrol' | 'hybrid' | 'electric'

export enum CategoryCars {
  NEWMODEL = 'NewModel',
  OLDSCHOOL = 'OldSchool',
  LEGEND = 'Legendary',
  LEMANS = 'LeMans',
  ELECTRIC = 'Electric',
  BIKES = 'Bikes'
}

export interface AScarsModel {
  img: string
  cModel: string,
  generation: string,
  engineCm3?: number,
  engineKWH?: number
  engineCombustion: engComb
  YOP: Date,                  //Year of production
  bodyType: string,
  power: number,
  description: string,
  category: string
  id?: any
}
