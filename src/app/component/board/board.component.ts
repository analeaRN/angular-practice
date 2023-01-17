import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDragSortEvent,
  CdkDragEnter,
  CdkDragMove,
  CdkDragStart
} from '@angular/cdk/drag-drop';
import { Word } from 'src/app/interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
  @Input() board: any;

  @Input() setWords!: Word[];
  @Input() toTranslate!: Word[];

  results: (boolean|undefined)[];

  constructor() {
    this.results = [];
  }

  ngOnInit(): void {
    // shuffle words?
    BoardComponent.shuffleArray(this.toTranslate);
  }

  ngOnDestroy(): void {
    this.results = [];
  }

  // taskDrop(event: CdkDragDrop<string[]>) {
  // taskDrop(event: CdkDragDrop<string[]>) {

  //   console.log('help');
  //   moveItemInArray(this.board, event.previousIndex, event.currentIndex);
  // }

  taskDrop_(event: CdkDragDrop<string[]>) {
    console.log('help ME');
    // cannot use since
    // moveItemInArray(this.toTranslate, event.previousIndex, event.currentIndex);
    const oldValue = this.toTranslate[event.currentIndex];
    this.toTranslate[event.currentIndex] =
      this.toTranslate[event.previousIndex];
    this.toTranslate[event.previousIndex] = oldValue;
  }

  checkAnswers() {
    // we want to SHOW what is wrong and what is right

    this.results = this.setWords.map((el, i) => {
      // if (this.toTranslate[i].id == el.id) {
      //   return true
      // }
      // return false;
      return this.toTranslate[i].id == el.id;
    });

    console.log(this.results);
  }

  static shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  showResults(index: number) {
    if (!this.results || this.results.length == 0) return "";


    if (this.results[index]) {
      return "green ease-color-change";
    }

    // return "red shake";
    return "red ease-color-change";
  }

  test(e: CdkDragStart) {
    console.log(e);
  }


}

/*
TODO
- tell user/react when they got everything right
- have a reset button to try again?
- overall score


*/