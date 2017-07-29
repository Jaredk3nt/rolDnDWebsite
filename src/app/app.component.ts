import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  providers: [ UrlService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    active: String;

    constructor(private router: Router, private urlService: UrlService) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                this.urlService.setPath(event.url);
                this.setTab();
            }
        });
    }

    setTab() {
        this.active = this.urlService.tabPath;
    }
}
