import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImageRightComponent } from './box-image-right.component';

describe('BoxImageRightComponent', () => {
  let component: BoxImageRightComponent;
  let fixture: ComponentFixture<BoxImageRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxImageRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
