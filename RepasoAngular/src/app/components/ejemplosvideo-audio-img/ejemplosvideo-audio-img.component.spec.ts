import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosvideoAudioImgComponent } from './ejemplosvideo-audio-img.component';

describe('EjemplosvideoAudioImgComponent', () => {
  let component: EjemplosvideoAudioImgComponent;
  let fixture: ComponentFixture<EjemplosvideoAudioImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosvideoAudioImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplosvideoAudioImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
