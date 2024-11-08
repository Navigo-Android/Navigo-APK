import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFirebasePage } from './map-firebase.page';

describe('MapFirebasePage', () => {
  let component: MapFirebasePage;
  let fixture: ComponentFixture<MapFirebasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
