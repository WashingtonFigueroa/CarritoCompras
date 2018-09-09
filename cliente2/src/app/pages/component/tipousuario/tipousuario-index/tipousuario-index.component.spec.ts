import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioIndexComponent } from './tipousuario-index.component';

describe('TipousuarioIndexComponent', () => {
  let component: TipousuarioIndexComponent;
  let fixture: ComponentFixture<TipousuarioIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
