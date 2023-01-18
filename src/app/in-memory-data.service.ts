import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, UserWordStat, Word } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users: User[] = [
      {
        uid: '5c1f225a-6bc8-484a-aaed-5688798330bd',
        userName: 'fakeUser',
        password: "fakePassword",
      },
      {
        uid: '46509661-f368-4237-bb50-77e413077811',
        userName: 'testExample',
        password: 'password',
      },
      // {
      //   uid: '34ac4ca9-2d0b-4c55-8d2e-8dda403e2698',
      //   userName: 'thisIsATest',
      //   password: 'user-test',
      // },
    ];

    let userWordStats: UserWordStat[] = [
      {
        user_uid: '5c1f225a-6bc8-484a-aaed-5688798330bd', // FK
        word_id: 0, //FK
        correct: 0,
        incorrect: 0,
      },
      {
        user_uid: '5c1f225a-6bc8-484a-aaed-5688798330bd',
        word_id: 1,
        correct: 0,
        incorrect: 0,
      },
      {
        user_uid: '5c1f225a-6bc8-484a-aaed-5688798330bd',
        word_id: 2,
        correct: 0,
        incorrect: 1000,
      },
    ];

    let words: Word[] = [
      {
        id: 0,
        english: 'hello',
        ilocano: 'kumusta',
      },
      {
        id: 1,
        english: 'good bye',
        ilocano: ['ala', 'sige'],
      },
      {
        id: 2,
        english: ['chair', 'sit down', 'set down'],
        ilocano: 'tugaw',
      },
      {
        id: 3,
        english: 'fork',
        ilocano: 'tenedor',
      },
      {
        id: 4,
        english: 'eye',
        ilocano: 'mata',
      },
      {
        id: 5,
        english: 'i',
        ilocano: 'siak',
      },
      {
        id: 6,
        english: 'you',
        ilocano: 'sika',
      },
      {
        id: 7,
        english: 'yes',
        ilocano: 'wen',
      },
      {
        id: 8,
        english: 'no',
        ilocano: 'saan',
      },
      {
        id: 9,
        english: ['delicious', 'yummy'],
        ilocano: 'naimas',
      },
      {
        id: 10,
        english: 'water',
        ilocano: 'danum',
      },
    ];
    return { words, users, userWordStats };
    // return { words };
  }

  // do not allow user to add a new
  // ...
  genId<T extends Word>(words: T[]): number {
    return words.length > 0
      ? Math.max(...words.map((word) => word.id)) + 1
      : 11;
  }
}
