import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Word } from '../interfaces';
import { WORDS } from '../mock_data';

import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  // private wordsUrl = 'api/words'; // URL to web api

  constructor(private http: HttpClient) {}

  // getting from static mock data
  getWords(): Observable<Word[]> {
    const words = of(WORDS)
    return words;
  }

  getWord(id: number): Observable<Word | undefined> {
    const words = of(WORDS.find(w => w.id == id))
    return words;
  }

  // below is getting from backend api
  // getWords(): Observable<Word[]> {
  //   return this.http.get<Word[]>(this.wordsUrl);
  // }

  // getWord(id: number): Observable<Word> {
  //   const url = `${this.wordsUrl}/${id}`;
  //   return this.http
  //     .get<Word>(url)
  //     .pipe(catchError(this.handleError<Word>(`getHero id=${id}`)));
  // }

  // getWordNo404<Data>(id: number): Observable<Word> {
  //   const url = `${this.wordsUrl}/?id=${id}`;
  //   return this.http.get<Word[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       catchError(this.handleError<Word>(`getHero id=${id}`))
  //     );
  // }

  // /* GET heroes whose name contains search term */
  // searchWords(term: string): Observable<Word[]> {
  //   if (!term.trim()) { // empty search
  //     return of([]);
  //   }

  //   return this.http.get<Word[]>(`${this.wordsUrl}/?english=${term}`).pipe(
  //     catchError(this.handleError<Word[]>('searchHeroes', []))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
