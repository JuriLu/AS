import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay, tap} from "rxjs";
import {AScarsModel} from "../models/AScars.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class AScarsService {

  constructor(private http: HttpClient) {
  }

  loadASCarsyCategory(category): Observable<AScarsModel[]> {
    return this.http.get<AScarsModel[]>(environment.apiUrlBMWs)
      .pipe(
        tap((res: AScarsModel[]) => console.log('res', res)),
        map((bmws: AScarsModel[]) => bmws.filter((bmw: AScarsModel): boolean => bmw.category === category)),
        shareReplay()
      )
  }

  addASCar(model: Partial<AScarsModel>): Observable<Partial<AScarsModel>> {
    return this.http.post<Partial<AScarsModel>>(environment.apiUrlBMWs, model)
  }


}
