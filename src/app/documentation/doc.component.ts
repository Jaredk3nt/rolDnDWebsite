import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlService } from '../url.service';

@Component({
  selector: 'doc-component',
  providers: [ UrlService ],
  templateUrl: './doc.component.html',
  styleUrls: ['../app.component.scss']
})
export class DocComponent implements OnInit {
    active = 'Overview';

    constructor(private urlService: UrlService) { }

    ngOnInit() {

    }

    activate(item:string) {
      this.active = item;
    }
}
