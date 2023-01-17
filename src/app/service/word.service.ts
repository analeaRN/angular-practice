import { Injectable } from '@angular/core';
import { Word } from '../interfaces';
import { WORDS } from '../mock_data';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getWords(): Observable<Word[]> {
    const words = of(WORDS)
    return words;
  }

  // this should be able to update a word for the user... 
  updateWord() {

  }

  getWord(id: number): Observable<Word | undefined> {
    const words = of(WORDS.find(w => w.id == id))
    return words;
  }
}
