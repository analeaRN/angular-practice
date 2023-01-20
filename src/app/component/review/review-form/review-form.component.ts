import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent implements OnInit {
  myForm!: FormGroup;
  submitted: boolean = false;
  @Input() max: number = 2;
  @Input() min: number = 2;

  // there should be a better way at defining this and sharing it
  @Input() defaultChoice: 'dragDrop' | 'typeTranslate' = 'dragDrop';

  // I need to tell my parent what
  // form values I am outputting so
  // it can render out the correct review type
  @Output() myFormSubmitted = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numReview: [
        this.min,
        [Validators.max(this.max), Validators.min(this.min)],
      ],
      reviewType: [this.defaultChoice, [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      // console.log(form.valid);
      return;
    }
    this.myFormSubmitted.emit(this.myForm);

    // disable the form elements
    this.myForm.disable();
    this.submitted = true;
  }
}
