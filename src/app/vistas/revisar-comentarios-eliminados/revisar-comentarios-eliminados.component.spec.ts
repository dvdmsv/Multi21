import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarComentariosEliminadosComponent } from './revisar-comentarios-eliminados.component';

describe('RevisarComentariosEliminadosComponent', () => {
  let component: RevisarComentariosEliminadosComponent;
  let fixture: ComponentFixture<RevisarComentariosEliminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarComentariosEliminadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarComentariosEliminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
