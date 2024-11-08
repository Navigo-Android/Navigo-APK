import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MysqlPage } from './mysql.page';

describe('MysqlPage', () => {
  let component: MysqlPage;
  let fixture: ComponentFixture<MysqlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
