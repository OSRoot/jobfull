import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateFreelancerPage } from './update-freelancer.page';

describe('UpdateFreelancerPage', () => {
  let component: UpdateFreelancerPage;
  let fixture: ComponentFixture<UpdateFreelancerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateFreelancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
