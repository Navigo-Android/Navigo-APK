import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFlaskPage } from './map-flask.page';

describe('MapFlaskPage', () => {
  let component: MapFlaskPage;
  let fixture: ComponentFixture<MapFlaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFlaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
