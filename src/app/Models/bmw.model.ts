export type engComb = 'diesel' | 'petrol' | 'combined'

export interface BmwModel {
  img: string
  cModel: string,
  generation: string,
  engineCm3: number,
  engineKWH?:number
  engineCombustion: engComb
  YOP: Date,                  //Year of production
  bodyType: string,
  power: number,
  description: string,
  category: string
  id?: any
}
