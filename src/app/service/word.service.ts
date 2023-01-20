import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

import { Word } from '../interfaces';
import { WORDS } from '../mock_data';


@Injectable({
  providedIn: 'root',
})
export class WordService {
  // private wordsUrl = 'api/words'; // URL to web api

  constructor(private http: HttpClient) {}

  getWords(): Observable<Word[]> {
    const words = of(WORDS);
    return words;
  }

  getWord(id: number): Observable<Word | undefined> {
    const words = of(WORDS.find((w) => w.id == id));
    return words;
  }

  getXWords(amount: number, shuffle: boolean = true) {
    // get words from db
    const words = [...WORDS];

    if (shuffle) {
      WordService.shuffleArray(words);
    }

    return of(words.slice(0, amount));
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

  // /* GET word whose name contains search term */
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

  static shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
