import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapCPage } from './map-c.page';

describe('MapCPage', () => {
  let component: MapCPage;
  let fixture: ComponentFixture<MapCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
