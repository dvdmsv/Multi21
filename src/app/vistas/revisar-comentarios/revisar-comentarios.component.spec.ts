import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarComentariosComponent } from './revisar-comentarios.component';

describe('RevisarComentariosComponent', () => {
  let component: RevisarComentariosComponent;
  let fixture: ComponentFixture<RevisarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarComentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
