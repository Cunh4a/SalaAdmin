import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantacaoComponent } from './implantacao.component';

describe('ImplantacaoComponent', () => {
  let component: ImplantacaoComponent;
  let fixture: ComponentFixture<ImplantacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplantacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
