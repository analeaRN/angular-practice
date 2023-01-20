import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListElComponent } from './word-list-el.component';

describe('WordListElComponent', () => {
  let component: WordListElComponent;
  let fixture: ComponentFixture<WordListElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordListElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordListElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
