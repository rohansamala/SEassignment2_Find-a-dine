import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestProfileComponentComponent } from './rest-profile-component.component';

describe('RestProfileComponentComponent', () => {
  let component: RestProfileComponentComponent;
  let fixture: ComponentFixture<RestProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
