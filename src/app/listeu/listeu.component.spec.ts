import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeuComponent } from './listeu.component';

describe('ListeuComponent', () => {
  let component: ListeuComponent;
  let fixture: ComponentFixture<ListeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
