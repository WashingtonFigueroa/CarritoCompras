import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegioEditComponent } from './privilegio-edit.component';

describe('PrivilegioEditComponent', () => {
  let component: PrivilegioEditComponent;
  let fixture: ComponentFixture<PrivilegioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
