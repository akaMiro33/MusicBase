import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSiteComponent } from './album-site.component';

describe('AlbumSiteComponent', () => {
  let component: AlbumSiteComponent;
  let fixture: ComponentFixture<AlbumSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
