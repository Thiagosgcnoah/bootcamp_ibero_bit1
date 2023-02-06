import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaPerrosComponent } from './tienda-perros.component';

describe('TiendaPerrosComponent', () => {
  let component: TiendaPerrosComponent;
  let fixture: ComponentFixture<TiendaPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaPerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
