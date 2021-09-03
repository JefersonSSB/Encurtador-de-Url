import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Url } from '../models/url.model'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']

    })
  }

  save(user: Url): Observable<Url> {
    return this.http.post<Url>(this.baseUrl, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  get(): Observable<Url[]> {
    return this.http.get<Url[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    if (e.error[0] != null) {
      this.showMessage(e.error[0].message, true)
    }
    else {
      this.showMessage("Erro desconhecido", true)
    }
    return EMPTY;
  }

}
