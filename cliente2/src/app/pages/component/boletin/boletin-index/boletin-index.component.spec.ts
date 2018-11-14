import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinIndexComponent } from './boletin-index.component';

describe('BoletinIndexComponent', () => {
  let component: BoletinIndexComponent;
  let fixture: ComponentFixture<BoletinIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
