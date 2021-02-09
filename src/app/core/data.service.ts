import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  delay,
  repeat,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl: string = environment.api_url;

  public constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  public getFromDataBase(action: string): FormData {
    const formData = new FormData();
    formData.append('a', action);
    formData.append('auth', 'LNOcHA5f_uxI4SOCzFblPuJM0vg80it6fo8');
    formData.append('apiv', '1');
    formData.append('api_key', 'asdf');
    return formData;
  }

  public getCoreVersion(): Observable<string> {
    const formData = new FormData();
    formData.append('a', 'CoreVersion');

    return this.httpClient.post<string>(this.apiUrl, formData).pipe(
    );
  }

  public getitboardMessage(): Observable<ApiResponse> {
    const formData = this.getFromDataBase('itboard_subscribed_announce');
    formData.append('subscribe_srl', '3');

    return this.httpClient.post<ApiResponse>(this.apiUrl, formData).pipe(
      delay(30000),
      repeat(),
    );
  }

  private handleDefaultResponse(value: any): any {
    return value;
  }

}
