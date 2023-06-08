import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyhomePage } from './myhome.page';

describe('MyhomePage', () => {
  let component: MyhomePage;
  let fixture: ComponentFixture<MyhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
