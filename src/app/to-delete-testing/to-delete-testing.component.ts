import { Component, OnInit } from '@angular/core';
import { WordService } from '../service/word.service';
import { Word } from '../interfaces';

@Component({
  selector: 'app-to-delete-testing',
  templateUrl: './to-delete-testing.component.html',
  styleUrls: ['./to-delete-testing.component.scss'],
})
export class ToDeleteTestingComponent implements OnInit {
  words!: Word[];
  userWords!: Word[];
  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.wordService.getWords().subscribe((word) => {
      this.words = word;
      this.userWords = [...word];
    });
    // this.wordService.getWords().subscribe(word => this.words = word);
  }
}

// to do display words first
