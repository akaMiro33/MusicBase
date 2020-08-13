import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderItemComponent } from './search-header-item.component';

describe('SearchHeaderItemComponent', () => {
  let component: SearchHeaderItemComponent;
  let fixture: ComponentFixture<SearchHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
