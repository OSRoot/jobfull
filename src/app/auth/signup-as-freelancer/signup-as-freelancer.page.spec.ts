import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupAsFreelancerPage } from './signup-as-freelancer.page';

describe('SignupAsFreelancerPage', () => {
  let component: SignupAsFreelancerPage;
  let fixture: ComponentFixture<SignupAsFreelancerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupAsFreelancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
