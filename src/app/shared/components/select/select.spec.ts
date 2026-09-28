import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select';

describe('SelectComponent', () => {
  let component: SelectComponent<unknown>;
  let fixture: ComponentFixture<SelectComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    fixture.componentRef.setInput('label', 'Label');
    fixture.componentRef.setInput('options', []);
    fixture.componentRef.setInput('optionLabel', 'name');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
