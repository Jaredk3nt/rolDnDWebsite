import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'doc-component',
  templateUrl: './doc.component.html',
  styleUrls: ['../app.component.scss']
})
export class DocComponent {
  active = 'overview';

  activate(item:string) {
      this.active = item;
  }
}
