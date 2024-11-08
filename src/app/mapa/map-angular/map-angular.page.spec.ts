import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAngularPage } from './map-angular.page';

describe('MapAngularPage', () => {
  let component: MapAngularPage;
  let fixture: ComponentFixture<MapAngularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAngularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
