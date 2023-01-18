import { Component, OnInit, Input } from '@angular/core';
import { Word } from 'src/app/interfaces';
import { WordService } from 'src/app/service/word.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getWord();
  }

  getWord() {
    const wordID = Number(this.route.snapshot.paramMap.get('id'));
    this.wordService.getWord(wordID).subscribe((w) => {
      this.word = w
      this.exampleURLS = `https://glosbe.com/ilo/en/${this.word?.ilocano}#examples`
    });
  }
}
