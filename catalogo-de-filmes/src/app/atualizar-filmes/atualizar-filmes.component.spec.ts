import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFilmesComponent } from './atualizar-filmes.component';

describe('AtualizarFilmesComponent', () => {
  let component: AtualizarFilmesComponent;
  let fixture: ComponentFixture<AtualizarFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
