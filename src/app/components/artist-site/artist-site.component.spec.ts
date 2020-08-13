import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSiteComponent } from './artist-site.component';

describe('ArtistSiteComponent', () => {
  let component: ArtistSiteComponent;
  let fixture: ComponentFixture<ArtistSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
