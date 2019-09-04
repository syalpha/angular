import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepComponent } from './listep.component';

describe('ListepComponent', () => {
  let component: ListepComponent;
  let fixture: ComponentFixture<ListepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
