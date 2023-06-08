import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyprofilePage } from './myprofile.page';

describe('MyprofilePage', () => {
  let component: MyprofilePage;
  let fixture: ComponentFixture<MyprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
