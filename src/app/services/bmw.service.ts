import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay, tap} from "rxjs";
import {BmwModel} from "../Models/bmw.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BmwService {

  constructor(private http: HttpClient) {
  }

  loadBMWByCategory(category): Observable<BmwModel[]> {
    return this.http.get<BmwModel[]>(environment.apiUrlBMWs)
      .pipe(
        tap(res => console.log('res', res)),
        map(bmws => bmws.filter(bmw => bmw.category === category)),
        shareReplay()
      )
  }


  }
