import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapJavaPage } from './map-java.page';

describe('MapJavaPage', () => {
  let component: MapJavaPage;
  let fixture: ComponentFixture<MapJavaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapJavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
