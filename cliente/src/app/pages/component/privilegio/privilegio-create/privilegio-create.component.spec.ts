import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegioCreateComponent } from './privilegio-create.component';

describe('PrivilegioCreateComponent', () => {
  let component: PrivilegioCreateComponent;
  let fixture: ComponentFixture<PrivilegioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
