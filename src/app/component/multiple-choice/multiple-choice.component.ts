import { Component, OnInit, Input } from '@angular/core';
import { Word } from 'src/app/interfaces';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  test: string | undefined;
  @Input() translation!: Word[];
  
  constructor() { }

  ngOnInit(): void {
  }

}

/*
TODO
- show all words
- have it choose a choice between all of them
- 3 random ones
- one correct one

*/
