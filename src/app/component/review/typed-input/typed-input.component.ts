import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word, WordResultWrapper } from 'src/app/interfaces';
import { WordService } from 'src/app/service/word.service';

// TODO restart a new session...

@Component({
  selector: 'app-typed-input',
  templateUrl: './typed-input.component.html',
  styleUrls: ['./typed-input.component.scss'],
})
export class TypedInputComponent implements OnInit {
  reviewForm!: FormGroup;
  @Input() reviewAmount: number = 2;
  @Input() session!: number;
  @Output() sessionResults = new EventEmitter<WordResultWrapper[]>();

  wordsToReview: WordResultWrapper[] = [];
  submitted = false;
  finalSubmit = false;

  constructor(private fb: FormBuilder, private wordService: WordService) {}

  ngOnInit(): void {
    this.setUpWords();
    this.reviewForm = this.fb.group(this.createForm());
  }

  createForm() {
    let formControls = {};

    this.wordsToReview.map((word) => {
      // const name: string = word!.english.toString();
      const name: string = word.word.id.toString();
      console.log(name);
      formControls = {
        ...formControls,
        ...{
          [name]: [''],
        },
      };
    });
    // console.log('..', formControls);
    // console.log();
    return formControls;
  }

  setUpWords() {
    this.wordService.getXWords(this.reviewAmount).subscribe((w) => {
      // this.wordsToReview = w;
      this.wordsToReview = w.map((word) => {
        return {
          incorrectCount: 0,
          result: undefined,
          word: word,
        };
      });
    });
    // console.log(this.wordsToReview);
  }

  checkWord(wordID: number, userAnswer: string) {
    console.log(wordID);
    console.log(userAnswer);

    const wordObj = this.wordsToReview.find((word) => word.word.id == wordID);
    // if (typeof(wordObj?.word.english)  === string) {
    if (typeof wordObj?.word.english === 'string') {
      wordObj!.result = Boolean(userAnswer === wordObj?.word.english);
    } else {
      wordObj!.result = Boolean(
        wordObj?.word.english.some((w) => w == userAnswer)
      );
    }

    if (!wordObj!.result) {
      wordObj!.incorrectCount += 1;
    }
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    const correct: WordResult[] = [];

    // form.controls
    let count = 0;
    Object.keys(form.controls).forEach((key) => {
      console.log('Keu is', key);
      this.checkWord(Number(key), this.reviewForm.controls[key].value);
    });
    this.reviewForm.disable();
  }

  retryWord(wordID: number) {
    console.log(wordID, 'TRY AGAIN');

    // find word
    const wordInfo = this.wordsToReview.find((word) => word.word.id == wordID);

    // reset it
    wordInfo!.result = undefined;

    // clear form
    // and enable it
    this.reviewForm.controls[wordID].enable();
    this.reviewForm.controls[wordID].reset();

    this.submitted = false;
  }

  fillWord(wordID: number) {
    // right now it
    // just accepts it as the right answer if the word is filled out...
    const wordInfo = this.wordsToReview.find((word) => word.word.id == wordID);
    wordInfo!.result = false;
    this.reviewForm.controls[wordID].disable();
    const answer = wordInfo?.word.english;
    if (typeof answer == 'string') {
      this.reviewForm.controls[wordID].setValue(wordInfo?.word.english);
    } else {
      // make sure to catch error, incase that the array is empty or if
      // for some reason the type assigned to english is not string or an array of strings
      this.reviewForm.controls[wordID].setValue(wordInfo?.word.english[0]);
    }
  }

  endSession(form: FormGroup) {
    if (this.submitted === false) {
      this.onSubmit(form);
    }
    this.sessionResults.emit(this.wordsToReview);

    // disable everything
    this.reviewForm.disable();
    this.submitted = true;
    this.finalSubmit = true;
  }

  // TODO
  // startNewSession() {
  // }
}

interface WordResult {
  wordID: number;
  result: boolean;
}
