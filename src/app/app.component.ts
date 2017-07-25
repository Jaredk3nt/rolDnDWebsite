import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 0;

  changePage(page: number) {
    this.page = page;
    console.log(this.page);
  }
}
