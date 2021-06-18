import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizandoFilmeComponent } from './atualizando-filme.component';

describe('AtualizandoFilmeComponent', () => {
  let component: AtualizandoFilmeComponent;
  let fixture: ComponentFixture<AtualizandoFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizandoFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizandoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
