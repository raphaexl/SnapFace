import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapfaceComponent } from './snapface.component';

describe('SnapfaceComponent', () => {
  let component: SnapfaceComponent;
  let fixture: ComponentFixture<SnapfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
