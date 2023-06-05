import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const API_NEW_EXPENSE = environment.apiBaseLink + '/api/v4/search/';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getAllMoviesList() {
    return this.httpClient.get<any>(API_NEW_EXPENSE + 'video?q=basketball');
  }
}
