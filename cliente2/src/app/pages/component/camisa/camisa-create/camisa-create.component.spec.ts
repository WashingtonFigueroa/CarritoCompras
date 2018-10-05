import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaCreateComponent } from './camisa-create.component';

describe('CamisaCreateComponent', () => {
  let component: CamisaCreateComponent;
  let fixture: ComponentFixture<CamisaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
