import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionStatsService } from 'src/app/service/session-stats.service';
import { WordService } from 'src/app/service/word.service';

import { Word } from 'src/app/interfaces';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  word: Word | undefined;
  exampleURLS!: string;

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute,
    public sessionStatsService: SessionStatsService
  ) {}

  ngOnInit(): void {
    this.getWord();
  }

  getWord() {
    const wordID = Number(this.route.snapshot.paramMap.get('id'));
    this.wordService.getWord(wordID).subscribe((w) => {
      this.word = w;
      this.exampleURLS = `https://glosbe.com/ilo/en/${this.word?.ilocano}#examples`;
    });
  }
}
