/* Write a service to handle the interactions with the url and store
all of the current states for the tabs */
import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class UrlService {
    urlUpdated$: EventEmitter<String[]>;
    path: String[];

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                console.log('in service looking at the router');
                this.urlUpdated$.emit(event.url.split("/"));
            }
        });
        this.urlUpdated$ = new EventEmitter();
    }

    setPath(path: String) {
        this.path = path.split("/");
        this.urlUpdated$.emit(this.path);
    }

    notify() {
        this.urlUpdated$.emit(this.path);
    }

}
