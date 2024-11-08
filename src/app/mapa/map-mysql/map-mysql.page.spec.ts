import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapMysqlPage } from './map-mysql.page';

describe('MapMysqlPage', () => {
  let component: MapMysqlPage;
  let fixture: ComponentFixture<MapMysqlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMysqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
