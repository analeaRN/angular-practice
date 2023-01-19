import { Component, Input } from '@angular/core';
import { WordResultWrapper } from 'src/app/interfaces';

@Component({
  selector: 'app-results',
  // templateUrl: './results.component.html',
  template: ` <div class="container">
    <h3>Session Review</h3>
    <button mat-stroked-button routerLink="/">Go Home</button>
    <!-- TODO -->
    <!-- <a routerLink="/review"><p>Start a new session</p></a> -->
    <div class="middle">
      <mat-card class="middle card-result">
        <mat-card-title
          ><h1>{{ rightWrongRatio }}%</h1></mat-card-title
        >
        <p>You got {{ totalCorrect }} out of {{ totalReviewed }} correct!</p>
      </mat-card>

      <p>more details</p>
    </div>
    <div>
      <div *ngFor="let word of allWordsReviewed" class="result-words">
        <h2><mat-icon>arrow_right_alt</mat-icon>{{ word.word.english.toString() | titlecase }}</h2>
        <p>Amount of times guessed incorrectly: {{ word.incorrectCount }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  @Input() rightWrongRatio!: string | number;
  @Input() totalCorrect!: string | number;
  @Input() totalReviewed!: string | number;
  @Input() allWordsReviewed: WordResultWrapper[] = [];
}
