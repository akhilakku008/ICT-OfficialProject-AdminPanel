import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgepartnerComponent } from './knowledgepartner.component';

describe('KnowledgepartnerComponent', () => {
  let component: KnowledgepartnerComponent;
  let fixture: ComponentFixture<KnowledgepartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgepartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
