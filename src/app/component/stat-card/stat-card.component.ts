import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <mat-card class="word-list-el">
      <mat-card-title>{{title}}</mat-card-title>
      <mat-card-content ngClass="hide">
        {{ stat }}
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() title!: string;
  @Input() stat!: number;

  constructor() {}

  ngOnInit(): void {}
}
