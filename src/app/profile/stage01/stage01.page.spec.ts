import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stage01Page } from './stage01.page';

describe('Stage01Page', () => {
  let component: Stage01Page;
  let fixture: ComponentFixture<Stage01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Stage01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
