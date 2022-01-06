import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImgUploadComponent } from './admin-img-upload.component';

describe('AdminImgUploadComponent', () => {
  let component: AdminImgUploadComponent;
  let fixture: ComponentFixture<AdminImgUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImgUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImgUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
