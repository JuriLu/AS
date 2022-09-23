import {Injectable} from '@angular/core';
import {Observable, shareReplay} from "rxjs";
import {News} from "../Models/ASnews.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ASnewsService {

  constructor(private http: HttpClient) {
  }

  loadNews(): Observable<News[]> {
    return this.http.get<News[]>(environment.apiUrlNews)
      .pipe(
        shareReplay()
      )
  }
}
