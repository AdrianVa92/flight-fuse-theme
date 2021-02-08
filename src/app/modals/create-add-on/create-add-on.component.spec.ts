import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddOnComponent } from './create-add-on.component';

describe('CreateAddOnComponent', () => {
  let component: CreateAddOnComponent;
  let fixture: ComponentFixture<CreateAddOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAddOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
