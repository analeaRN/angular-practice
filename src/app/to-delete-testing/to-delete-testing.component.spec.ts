import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDeleteTestingComponent } from './to-delete-testing.component';

describe('ToDeleteTestingComponent', () => {
  let component: ToDeleteTestingComponent;
  let fixture: ComponentFixture<ToDeleteTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDeleteTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDeleteTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
