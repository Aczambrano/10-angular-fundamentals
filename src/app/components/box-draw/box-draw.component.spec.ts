import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDrawComponent } from './box-draw.component';

describe('BoxDrawComponent', () => {
  let component: BoxDrawComponent;
  let fixture: ComponentFixture<BoxDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxDrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
