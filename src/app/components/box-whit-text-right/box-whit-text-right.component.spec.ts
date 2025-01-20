import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWhitTextRightComponent } from './box-whit-text-right.component';

describe('BoxWhitTextRightComponent', () => {
  let component: BoxWhitTextRightComponent;
  let fixture: ComponentFixture<BoxWhitTextRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWhitTextRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWhitTextRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
