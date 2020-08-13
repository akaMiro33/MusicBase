import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSiteComponent } from './registration-site.component';

describe('RegistrationSiteComponent', () => {
  let component: RegistrationSiteComponent;
  let fixture: ComponentFixture<RegistrationSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
