import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapOraclePage } from './map-oracle.page';

describe('MapOraclePage', () => {
  let component: MapOraclePage;
  let fixture: ComponentFixture<MapOraclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOraclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
