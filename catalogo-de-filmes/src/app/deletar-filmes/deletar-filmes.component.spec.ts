import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFilmesComponent } from './deletar-filmes.component';

describe('DeletarFilmesComponent', () => {
  let component: DeletarFilmesComponent;
  let fixture: ComponentFixture<DeletarFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
