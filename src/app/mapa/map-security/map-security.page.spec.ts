import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapSecurityPage } from './map-security.page';

describe('MapSecurityPage', () => {
  let component: MapSecurityPage;
  let fixture: ComponentFixture<MapSecurityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
