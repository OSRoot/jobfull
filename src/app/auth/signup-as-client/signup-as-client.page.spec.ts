import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupAsClientPage } from './signup-as-client.page';

describe('SignupAsClientPage', () => {
  let component: SignupAsClientPage;
  let fixture: ComponentFixture<SignupAsClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupAsClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
