import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilmesComponent } from './criar-filmes.component';

describe('CriarFilmesComponent', () => {
  let component: CriarFilmesComponent;
  let fixture: ComponentFixture<CriarFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
