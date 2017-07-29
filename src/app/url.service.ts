/* Write a service to handle the interactions with the url and store
all of the current states for the tabs */
import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
    tabPath: String;
    docPath: String;

    setPath(path: String) {
        let splitPath = path.split("/");
        this.tabPath = splitPath[1];
        this.docPath = splitPath[2];
        
        console.log('Tabs path:', this.tabPath);
        console.log('Docs path:', this.docPath);
    }

}
