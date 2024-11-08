import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapReactPage } from './map-react.page';

describe('MapReactPage', () => {
  let component: MapReactPage;
  let fixture: ComponentFixture<MapReactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapReactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
