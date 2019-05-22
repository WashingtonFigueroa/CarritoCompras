import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaIndexComponent } from './camisa-index.component';

describe('CamisaIndexComponent', () => {
  let component: CamisaIndexComponent;
  let fixture: ComponentFixture<CamisaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
