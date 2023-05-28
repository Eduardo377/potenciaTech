import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoEmAndamentoComponent } from './curso-em-andamento.component';

describe('CursoEmAndamentoComponent', () => {
  let component: CursoEmAndamentoComponent;
  let fixture: ComponentFixture<CursoEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoEmAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
