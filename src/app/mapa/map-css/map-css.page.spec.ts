import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapCssPage } from './map-css.page';

describe('MapCssPage', () => {
  let component: MapCssPage;
  let fixture: ComponentFixture<MapCssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
