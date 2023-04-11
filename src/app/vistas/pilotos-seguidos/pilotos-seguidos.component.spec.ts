import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosSeguidosComponent } from './pilotos-seguidos.component';

describe('PilotosSeguidosComponent', () => {
  let component: PilotosSeguidosComponent;
  let fixture: ComponentFixture<PilotosSeguidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotosSeguidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotosSeguidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
