import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSiteComponent } from './song-site.component';

describe('SongSiteComponent', () => {
  let component: SongSiteComponent;
  let fixture: ComponentFixture<SongSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
