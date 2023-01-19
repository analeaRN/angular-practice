import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordService } from 'src/app/service/word.service';
import { Word, WordResultWrapper } from 'src/app/interfaces';

import {
  CdkDragDrop,
  moveItemInArray,
  CdkDragSortEvent,
  CdkDragEnter,
  CdkDragMove,
  CdkDragStart,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss'],
})
export class DragNDropComponent implements OnInit {
  @Input() reviewAmount: number = 2;
  @Output() sessionResults = new EventEmitter<WordResultWrapper[]>();

  wordsToReview: Word[] = [];
  wordsToTranslate: WordResultWrapper[] = [];

  finalSubmit: boolean = false;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.setUpWords();
  }

  setUpWords() {
    // get random words to use
    this.wordService.getXWords(this.reviewAmount).subscribe((w) => {
      this.wordsToReview = w;
      this.wordsToTranslate = w.map((word) => {
        return {
          incorrectCount: 0,
          result: undefined,
          word: word,
        };
      });
    });

    WordService.shuffleArray(this.wordsToTranslate);
  }

  taskDrop(event: CdkDragDrop<string[]>) {
    console.log('help ME');
    // cannot use since
    // moveItemInArray(this.toTranslate, event.previousIndex, event.currentIndex);
    const oldValue = this.wordsToTranslate[event.currentIndex];
    this.wordsToTranslate[event.currentIndex] =
      this.wordsToTranslate[event.previousIndex];
    this.wordsToTranslate[event.previousIndex] = oldValue;
  }

  getClassGivenResults(index: number) {
    let addOn = this.finalSubmit? "disabled-card": ""

    // // return "red shake";
    const t = this.wordsToTranslate[index];

    if (t.result === undefined) return '';

    if (t.result) {
      return 'green ease-color-change ' + addOn;
    }

    // return "red shake";
    return 'red ease-color-change ' + addOn;
  }

  checkAnswers() {
    // update results
    this.wordsToTranslate.map((word, index) => {
      
      word.result = word.word.id === this.wordsToReview[index].id;
      if (!word.result) {
        word.incorrectCount++;
      }
    });
  }

  endSession() {
    this.checkAnswers();

    // disable everything
    this.finalSubmit = true;
    this.sessionResults.emit(this.wordsToTranslate);

    // need to show results
  }
}
