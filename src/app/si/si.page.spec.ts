import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiPage } from './si.page';

describe('SiPage', () => {
  let component: SiPage;
  let fixture: ComponentFixture<SiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
