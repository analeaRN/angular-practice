import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedInputComponent } from './typed-input.component';

describe('TypedInputComponent', () => {
  let component: TypedInputComponent;
  let fixture: ComponentFixture<TypedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
