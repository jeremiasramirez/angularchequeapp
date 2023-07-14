import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedtokenComponent } from './verifiedtoken.component';

describe('VerifiedtokenComponent', () => {
  let component: VerifiedtokenComponent;
  let fixture: ComponentFixture<VerifiedtokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedtokenComponent]
    });
    fixture = TestBed.createComponent(VerifiedtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
