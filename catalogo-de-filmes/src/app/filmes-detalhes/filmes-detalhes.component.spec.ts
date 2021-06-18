import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDetalhesComponent } from './filmes-detalhes.component';

describe('FilmesDetalhesComponent', () => {
  let component: FilmesDetalhesComponent;
  let fixture: ComponentFixture<FilmesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
