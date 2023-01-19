import { Component, OnInit } from '@angular/core';

import { SessionStatsService } from 'src/app/service/session-stats.service';
import { WordService } from 'src/app/service/word.service';
import { Stat, Word } from 'src/app/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  wordsReviewed!: Map<number, Stat>;
  words!: Word[];

  constructor(
    public sessionStatsService: SessionStatsService,
    private wordService: WordService
  ) {}

  ngOnInit(): void {
    this.wordService.getWords().subscribe(w => this.words = w);
    this.wordsReviewed = this.sessionStatsService.wordStat;
  }

  getWordsReviewed() {
    const result: Word[] = []
    // for (const key of this.wordsReviewed.keys()) {
      
    // }
    this.words.map(w => {
      if (this.wordsReviewed.has(w.id)) {
        result.push(w)
      }
    });
    
    return result;
  }


}
