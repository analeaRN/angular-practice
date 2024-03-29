import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <mat-card class="stat">
      <mat-card-title>{{ title }}</mat-card-title>
      <mat-card-content>
        {{ stat }}
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() title!: string;
  @Input() stat!: number;

  constructor() {}
}
