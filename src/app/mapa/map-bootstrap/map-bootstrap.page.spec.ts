import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapBootstrapPage } from './map-bootstrap.page';

describe('MapBootstrapPage', () => {
  let component: MapBootstrapPage;
  let fixture: ComponentFixture<MapBootstrapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBootstrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
