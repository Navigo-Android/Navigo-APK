import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPythonPage } from './map-python.page';

describe('MapPage', () => {
  let component: MapPythonPage;
  let fixture: ComponentFixture<MapPythonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPythonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
