import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent implements OnInit {
  translationControl = new FormControl('');

  @Input() translation!: string;
  @Output() userAnswer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  fillOut() {
    console.log("hahaha");
    this.fillOutWith('nope not going to tell you...');
  }

  fillOutWith(str: string): void {
    console.log("hahaha");
    this.translationControl.setValue(str);
  }

  onSubmit() {
    console.log("sending")
    this.userAnswer.emit(this.translation);
  }

}