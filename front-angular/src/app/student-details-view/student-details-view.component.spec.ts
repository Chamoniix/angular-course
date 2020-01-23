import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsViewComponent } from './student-details-view.component';

describe('StudentDetailsViewComponent', () => {
  let component: StudentDetailsViewComponent;
  let fixture: ComponentFixture<StudentDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
