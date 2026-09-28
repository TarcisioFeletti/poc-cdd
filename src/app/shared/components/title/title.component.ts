import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ui-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <label><ng-content /></label>`,
  styleUrls: ['./title.scss'],
})
export class TitleComponent {}
