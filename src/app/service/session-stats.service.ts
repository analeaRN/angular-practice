import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStatsService {
  totalCorrect: number;
  totalIncorrect: number;

  wordStat: Map<number, Stat>;

  constructor() {
    this.totalCorrect = 0;
    this.totalIncorrect = 0;
    this.wordStat = new Map();
  }

  addTotalCorrect(amount: number = 1): void {
    this.totalCorrect += amount;
  }

  addTotalIncorrect(amount: number = 1): void {
    this.totalIncorrect += amount;
  }

  addCorrectWord(wordID: number, amount: number = 1): void {
    let toUpdateStat = this.wordStat.get(wordID);

    if (!toUpdateStat) {
      toUpdateStat = this.newStat();
    }

    toUpdateStat.correct += amount;
    this.wordStat.set(wordID, toUpdateStat);
  }

  addIncorrectWord(wordID: number, amount: number = 1): void {
    let toUpdateStat = this.wordStat.get(wordID);

    if (!toUpdateStat) {
      toUpdateStat = this.newStat();
    }

    toUpdateStat.incorrect += amount;
    this.wordStat.set(wordID, toUpdateStat);
  }

  getWordStat(wordID: number): Stat {
    return this.wordStat.get(wordID) ?? this.newStat();
  }

  getWordCIRatio(wordID: number): number {
    const word = this.wordStat.get(wordID) ?? this.newStat();
    const total = word.correct + word.incorrect;

    if (total == 0) return 0;

    return word.correct / (word.correct + word.incorrect);
  }

  private newStat(correct: number = 0, incorrect: number = 0): Stat {
    return {
      correct: correct,
      incorrect: incorrect,
    };
  }
}

interface Stat {
  correct: number;
  incorrect: number;
}
