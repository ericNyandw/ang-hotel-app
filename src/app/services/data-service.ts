import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

import {Post} from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private readonly http:HttpClient) {}
  private readonly ITEM_API_URL = 'https://jsonplaceholder.typicode.com/posts';


  getAllPosts(): Observable<Post[]> { // Specify the return type as an array of Post objects
    return this.http.get<Post[]>(this.ITEM_API_URL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
