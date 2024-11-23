import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapIonicPage } from './map-ionic.page';

describe('MapIonicPage', () => {
  let component: MapIonicPage;
  let fixture: ComponentFixture<MapIonicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
