import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfmysqlPage } from './pfmysql.page';

describe('PfmysqlPage', () => {
  let component: PfmysqlPage;
  let fixture: ComponentFixture<PfmysqlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfmysqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
