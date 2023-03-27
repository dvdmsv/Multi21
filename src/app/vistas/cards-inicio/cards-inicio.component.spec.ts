import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInicioComponent } from './cards-inicio.component';

describe('CardsInicioComponent', () => {
  let component: CardsInicioComponent;
  let fixture: ComponentFixture<CardsInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
