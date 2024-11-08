import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapTypescriptPage } from './map-typescript.page';

describe('MapTypescriptPage', () => {
  let component: MapTypescriptPage;
  let fixture: ComponentFixture<MapTypescriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
