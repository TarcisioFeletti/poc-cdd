import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: ` <button
    matButton="filled"
    type="button"
    (click)="onClick.emit()"
    [ngClass]="classes"
    [disabled]="disabled()"
  >
    @if(icon()) {
    <mat-icon aria-hidden="false" aria-label="Ícone card" class="icon">{{ icon() }}</mat-icon>
    }
    {{ label() }}
  </button>`,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  /** Botão terá o formato primário? */
  primary = input<boolean>(true);

  /** Qual cor de fundo será usado no botão */
  backgroundColor = input<string>();

  /** Quão grossa a fonte deve ser? */
  fontWeight = input<'lighter' | 'medium' | 'bold' | 'bolder'>('medium');

  /** Quão grande deve ser a fonte? */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Label do botão
   *
   * @required
   */
  label = input.required<string>();

  /** Qual ícone colocar antes do label */
  icon = input<string>();

  /** O botão estará desabilitado? */
  disabled = input<boolean>(false);

  /** Evento de click opcional */
  onClick = output();

  public get classes(): string[] {
    const mode = this.primary() ? 'button--primary' : 'button--secondary';

    return ['button', `button--${this.size()}`, mode, `button-font-${this.fontWeight()}`];
  }
}
