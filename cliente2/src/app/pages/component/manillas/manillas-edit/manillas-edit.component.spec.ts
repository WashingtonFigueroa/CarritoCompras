import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManillasEditComponent } from './manillas-edit.component';

describe('ManillasEditComponent', () => {
  let component: ManillasEditComponent;
  let fixture: ComponentFixture<ManillasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManillasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManillasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
