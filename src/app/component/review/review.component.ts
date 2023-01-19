// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { WordService } from 'src/app/service/word.service';

// // import { BoardComponent } from '../board/board.component';
// import { Word } from 'src/app/interfaces';

// @Component({
//   selector: 'app-review',
//   templateUrl: './review.component.html',
//   styleUrls: ['./review.component.scss'],
// })
// export class ReviewComponent implements OnInit {
//   myForm!: FormGroup;
//   showOption: boolean = false;
//   submitted: boolean = false;
//   max: number = 0;

//   chosenMethod: 'dragDrop' | 'typeTranslate' = 'dragDrop';

//   setReviewWords: Word[] = [];
//   private words: Word[] = [];

//   constructor(private fb: FormBuilder, private wordService: WordService) {}

//   ngOnInit(): void {
//     this.setUpWords();
//     this.myForm = this.fb.group({
//       numReview: [1, [Validators.max(this.max), Validators.min(1)]],
//       reviewType: [this.chosenMethod, [Validators.required]],
//       // userChoose: '',
//     });
//   }

//   onSubmit(form: FormGroup) {
//     if (!form.valid) {
//       console.log(form.valid);
//       return;
//     }

//     // disable the form elements
//     // this.myForm.disable();
//     this.submitted = true;

//     this.initWords(this.myForm.controls['numReview'].value);
//   }

//   setUpWords() {
//     this.wordService.getWords().subscribe((w) => {
//       this.words = w;
//       this.max = w.length;
//     });
//   }

//   initWords(amtToReview: number = 1) {
//     // I should mix array up
//     this.setReviewWords = this.words.slice(0, amtToReview);
//     console.log(this.setReviewWords)
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WordService } from 'src/app/service/word.service';
import { SessionStatsService } from 'src/app/service/session-stats.service';

// import { BoardComponent } from '../board/board.component';
import { Word, WordResultWrapper } from 'src/app/interfaces';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  // var for form?
  words: Word[] = [];
  reviewDetails: FormGroup | undefined;
  currentSession: number | undefined; // not needed until app is more complex

  // words to pass to child components
  // child renders method of testing
  setReviewWords: Word[] = [];

  // ending results
  submitted: boolean = false;
  // endResults: WordResultWrapper[] = []
  endResults: EndingResults | undefined = {
    rightWrongRatio: 0,
    totalCorrect: 0,
    totalReviewed: 0,
    endResults: [],
  };

  constructor(
    private wordService: WordService,
    private sessionStatsService: SessionStatsService
  ) {}

  ngOnInit(): void {
    this.setUpWords();
  }

  setUpWords() {
    this.wordService.getWords().subscribe((w) => {
      this.words = w;
    });
  }

  initWords(amtToReview: number = 1) {
    // I should mix array up
    this.setReviewWords = this.words.slice(0, amtToReview);
    console.log(this.setReviewWords);
  }

  handleSubmit(submittedForm: FormGroup) {
    console.log(submittedForm);
    this.reviewDetails = submittedForm;
    this.currentSession = this.sessionStatsService.newSession();
  }

  handleSessionEnd(results: WordResultWrapper[]) {
    results.map((wordResult) => {
      if (wordResult.result) {
        this.sessionStatsService.addCorrectWord(wordResult.word.id);
        this.sessionStatsService.addTotalCorrect();
      }

      this.sessionStatsService.addIncorrectWord(
        wordResult.word.id,
        wordResult.incorrectCount
      );
      this.sessionStatsService.addTotalIncorrect(wordResult.incorrectCount);
    });

    this.submitted = true;

    // calculate results
    const totalCorrect = results.reduce(
      (accumulator, currentValue) => {
        const val = currentValue.result? 1: 0;
        return accumulator + val
      }, 0
    );
    this.endResults = {
      rightWrongRatio:  Math.round((totalCorrect / results.length) * 100),
      totalCorrect: totalCorrect,
      totalReviewed: results.length,
      endResults: results,
    };
  }
}

interface EndingResults {
  rightWrongRatio: number;
  totalCorrect: number;
  totalReviewed: number;
  endResults: WordResultWrapper[];
}
