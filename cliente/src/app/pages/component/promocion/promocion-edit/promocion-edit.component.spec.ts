import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionEditComponent } from './promocion-edit.component';

describe('PromocionEditComponent', () => {
  let component: PromocionEditComponent;
  let fixture: ComponentFixture<PromocionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
