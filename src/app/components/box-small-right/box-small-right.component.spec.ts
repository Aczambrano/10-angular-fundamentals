import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSmallRightComponent } from './box-small-right.component';

describe('BoxSmallRightComponent', () => {
  let component: BoxSmallRightComponent;
  let fixture: ComponentFixture<BoxSmallRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxSmallRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSmallRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
