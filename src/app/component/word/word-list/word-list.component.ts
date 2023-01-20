import { Component, OnInit } from '@angular/core';

import { WordService } from 'src/app/service/word.service';
import { Word } from 'src/app/interfaces';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
})
export class WordListComponent implements OnInit {
  words!: Word[];
  showTranslations = false;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.wordService.getWords().subscribe((word) => (this.words = word));
  }
}
