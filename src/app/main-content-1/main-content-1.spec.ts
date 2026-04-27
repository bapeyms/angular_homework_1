import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent1 } from './main-content-1';

describe('MainContent1', () => {
  let component: MainContent1;
  let fixture: ComponentFixture<MainContent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContent1],
    }).compileComponents();

    fixture = TestBed.createComponent(MainContent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
