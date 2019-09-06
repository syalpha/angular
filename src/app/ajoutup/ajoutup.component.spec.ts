import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutupComponent } from './ajoutup.component';

describe('AjoutupComponent', () => {
  let component: AjoutupComponent;
  let fixture: ComponentFixture<AjoutupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
