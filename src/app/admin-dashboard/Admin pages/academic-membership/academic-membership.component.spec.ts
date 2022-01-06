import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicMembershipComponent } from './academic-membership.component';

describe('AcademicMembershipComponent', () => {
  let component: AcademicMembershipComponent;
  let fixture: ComponentFixture<AcademicMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
