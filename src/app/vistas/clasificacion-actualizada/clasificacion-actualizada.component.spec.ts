import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionActualizadaComponent } from './clasificacion-actualizada.component';

describe('ClasificacionActualizadaComponent', () => {
  let component: ClasificacionActualizadaComponent;
  let fixture: ComponentFixture<ClasificacionActualizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionActualizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionActualizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
