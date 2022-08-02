export type engComb = 'diesel' | 'petrol'

export interface BmwModel {
  img: string
  cModel: string,
  generation: string,
  engineCm3: number,
  engineCombustion: engComb
  YOP: number,                  //Year of production
  bodyType: string,
  power: number,
  description: string,
  category: string
}
