import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaGatosComponent } from './tienda-gatos.component';

describe('TiendaGatosComponent', () => {
  let component: TiendaGatosComponent;
  let fixture: ComponentFixture<TiendaGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaGatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
