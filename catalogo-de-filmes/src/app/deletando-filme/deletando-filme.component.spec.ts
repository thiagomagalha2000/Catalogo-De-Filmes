import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletandoFilmeComponent } from './deletando-filme.component';

describe('DeletandoFilmeComponent', () => {
  let component: DeletandoFilmeComponent;
  let fixture: ComponentFixture<DeletandoFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletandoFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletandoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
