import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseItemsComponent } from './firebase-items.component';

describe('FirebaseItemsComponent', () => {
  let component: FirebaseItemsComponent;
  let fixture: ComponentFixture<FirebaseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
