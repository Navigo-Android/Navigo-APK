import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapVuePage } from './map-vue.page';

describe('MapVuePage', () => {
  let component: MapVuePage;
  let fixture: ComponentFixture<MapVuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapVuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
