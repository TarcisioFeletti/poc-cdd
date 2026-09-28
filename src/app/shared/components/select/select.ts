import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Add this interface for option type
interface OptionType {
  [key: string]: any;
}

@Component({
  selector: 'select',
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatSelectModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class SelectComponent<T> {
  /**
   * Label do botão
   *
   * @required
   */
  label = input.required<string>();

  /**
   * Opções para seleção
   *
   * @required
   */
  options = input.required<OptionType[]>();

  /**
   * Nome da propriedade que será exibida no select
   *
   * @required
   */
  optionLabel = input.required<string>();

  /**
   * Evento de seleção de uma opção
   */
  onSelect = output<T>();

  /**
   * Evento de limpeza do campo
   */
  onClear = output<void>();

  inputControl = new FormControl();

  constructor() {
    this.inputControl.valueChanges.subscribe((value) => {
      this.onSelect.emit(value);
    });
  }

  clear() {
    this.inputControl.setValue(null);
    this.onClear.emit();
  }
}
