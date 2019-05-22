import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinCreateComponent } from './boletin-create.component';

describe('BoletinCreateComponent', () => {
  let component: BoletinCreateComponent;
  let fixture: ComponentFixture<BoletinCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
