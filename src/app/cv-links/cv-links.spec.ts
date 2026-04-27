import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLinks } from './cv-links';

describe('CvLinks', () => {
  let component: CvLinks;
  let fixture: ComponentFixture<CvLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(CvLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
