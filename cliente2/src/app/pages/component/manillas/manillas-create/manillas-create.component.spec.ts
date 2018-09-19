import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManillasCreateComponent } from './manillas-create.component';

describe('ManillasCreateComponent', () => {
  let component: ManillasCreateComponent;
  let fixture: ComponentFixture<ManillasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManillasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManillasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
