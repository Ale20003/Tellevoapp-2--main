import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoPage } from './no.page';

describe('NoPage', () => {
  let component: NoPage;
  let fixture: ComponentFixture<NoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
