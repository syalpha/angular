import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPComponent } from './ajout-p.component';

describe('AjoutPComponent', () => {
  let component: AjoutPComponent;
  let fixture: ComponentFixture<AjoutPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
