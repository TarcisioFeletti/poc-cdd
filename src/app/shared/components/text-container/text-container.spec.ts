import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContainer } from './text-container';

describe('TextContainer', () => {
  let component: TextContainer;
  let fixture: ComponentFixture<TextContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
