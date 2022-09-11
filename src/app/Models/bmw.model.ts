export type engComb = 'diesel' | 'petrol' | 'hybrid' | 'electric'

export interface BmwModel {
  img: string
  cModel: string,
  generation: string,
  engineCm3?: number,
  engineKWH?:number
  engineCombustion: engComb
  YOP: Date,                  //Year of production
  bodyType: string,
  power: number,
  description: string,
  category: string
  id?: any
}
