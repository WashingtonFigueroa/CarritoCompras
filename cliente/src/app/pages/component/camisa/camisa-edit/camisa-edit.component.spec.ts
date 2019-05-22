import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaEditComponent } from './camisa-edit.component';

describe('CamisaEditComponent', () => {
  let component: CamisaEditComponent;
  let fixture: ComponentFixture<CamisaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
