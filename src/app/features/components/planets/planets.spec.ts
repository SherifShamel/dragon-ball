import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planets } from './planets';

describe('Planets', () => {
  let component: Planets;
  let fixture: ComponentFixture<Planets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Planets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
