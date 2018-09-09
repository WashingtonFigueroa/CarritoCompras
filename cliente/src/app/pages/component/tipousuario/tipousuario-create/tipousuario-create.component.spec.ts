import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioCreateComponent } from './tipousuario-create.component';

describe('TipousuarioCreateComponent', () => {
  let component: TipousuarioCreateComponent;
  let fixture: ComponentFixture<TipousuarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
