import { Component, Input, OnInit } from '@angular/core';

import { Word } from 'src/app/interfaces';

@Component({
  selector: 'app-word-list-el',
  template: `
    <!--  class="mat-elevation-z4" -->
    <mat-card class="word-list-el">
      <mat-card-title>{{ word.ilocano.toString() | titlecase }}</mat-card-title>
      <!-- default hide english translation, override to show if showTranslation input is set -->
      <mat-card-subtitle ngClass="hide" [class.show]="showTranslation">{{
        word.english
      }}</mat-card-subtitle>
    </mat-card>
  `,
  styleUrls: ['./word-list-el.component.scss'],
})
export class WordListElComponent implements OnInit {
  @Input() word!: Word;
  @Input() showTranslation: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
