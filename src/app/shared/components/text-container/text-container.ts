import { Component } from '@angular/core';

@Component({
  selector: 'text-container',
  imports: [],
  template: `<div><ng-content /></div>`,
  styleUrl: './text-container.scss',
})
export class TextContainer {}
