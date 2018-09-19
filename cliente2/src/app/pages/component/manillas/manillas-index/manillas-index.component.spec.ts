import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManillasIndexComponent } from './manillas-index.component';

describe('ManillasIndexComponent', () => {
  let component: ManillasIndexComponent;
  let fixture: ComponentFixture<ManillasIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManillasIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManillasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
