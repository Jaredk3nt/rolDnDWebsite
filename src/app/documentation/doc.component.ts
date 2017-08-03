import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlService } from '../url.service';

@Component({
  selector: 'doc-component',
  providers: [ UrlService ],
  templateUrl: './doc.component.html',
  styleUrls: ['../app.component.scss']
})
export class DocComponent {
    active = 'overview';

    constructor(private urlService: UrlService) {
        this.urlService.urlUpdated$.subscribe((url) => {
            let docPath = url[2];
            if(docPath !== undefined) {
                this.active = docPath;
            } else {
                this.active = 'overview';
            }
            console.log(this.active);
        });
    }
}
