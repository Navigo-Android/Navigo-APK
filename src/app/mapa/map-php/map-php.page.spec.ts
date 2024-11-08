import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPhpPage } from './map-php.page';

describe('MapPhpPage', () => {
  let component: MapPhpPage;
  let fixture: ComponentFixture<MapPhpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPhpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
