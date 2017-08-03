import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-item',
  template: `
    <li>
        <a [ngClass]="active === title.toLowerCase() ? 'is-active' : '' " (click)="activate()" routerLink="{{link}}">{{title}}</a>
    </li>
    `
})
export class MenuItemComponent {
  @Input() title = '';
  @Input() link = '';

  @Input() active= '';
  @Output() activeChange = new EventEmitter();

  activate() {
      this.activeChange.emit(this.title);
  }
}

/* Usage:
 * <menu-item [(active)]="activeItem" [link]="/documentation/world" [title]="History">
 */
