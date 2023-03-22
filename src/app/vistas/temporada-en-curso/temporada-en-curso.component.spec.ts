import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporadaEnCursoComponent } from './temporada-en-curso.component';

describe('TemporadaEnCursoComponent', () => {
  let component: TemporadaEnCursoComponent;
  let fixture: ComponentFixture<TemporadaEnCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporadaEnCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporadaEnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
