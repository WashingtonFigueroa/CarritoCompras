import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegioIndexComponent } from './privilegio-index.component';

describe('PrivilegioIndexComponent', () => {
  let component: PrivilegioIndexComponent;
  let fixture: ComponentFixture<PrivilegioIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegioIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegioIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
