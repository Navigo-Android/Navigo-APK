import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapJsPage } from './map-js.page';

describe('MapJsPage', () => {
  let component: MapJsPage;
  let fixture: ComponentFixture<MapJsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapJsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
