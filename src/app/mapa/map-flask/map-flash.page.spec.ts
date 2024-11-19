import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFlashPage } from './map-flash.page';

describe('MapFlashPage', () => {
  let component: MapFlashPage;
  let fixture: ComponentFixture<MapFlashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
