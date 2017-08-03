import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DocComponent } from './doc.component';
import { DocInfoComponent } from './docinfo.component';
import { HistoryDocComponent } from './world/historydoc.component';
import { SystemsDocComponent } from './world/systemsdoc.component';
import { RacesDocComponent } from './character/racesdoc.component';
import { ClassesDocComponent } from './character/classesdoc.component';
import { AbilitiesDocComponent } from './character/abilitiesdoc.component';
import { ItemsDocComponent } from './character/itemsdoc.component';
import { HumanoidsDocComponent } from './monsters/humanoidsdoc.component';
import { BeastsDocComponent } from './monsters/beastsdoc.component';

import { MenuItemComponent } from './menu-item.component';

const documentationRoutes: Routes = [
    {
        path: 'documentation', component: DocComponent , children: [
            { path: '', component: DocInfoComponent, children: [
                { path: 'history', component: HistoryDocComponent },
                { path: 'systems', component: SystemsDocComponent },
                { path: 'races', component: RacesDocComponent },
                { path: 'classes', component: ClassesDocComponent },
                { path: 'abilities', component: AbilitiesDocComponent },
                { path: 'items', component: ItemsDocComponent },
                { path: 'humanoids', component: HumanoidsDocComponent },
                { path: 'beasts', component: BeastsDocComponent }
            ] }
        ]
    }
];

@NgModule ({
    declarations: [
        DocComponent,
        DocInfoComponent,
        HistoryDocComponent,
        SystemsDocComponent,
        RacesDocComponent,
        ClassesDocComponent,
        AbilitiesDocComponent,
        ItemsDocComponent,
        BeastsDocComponent,
        HumanoidsDocComponent,
        MenuItemComponent
    ],
    imports: [
        RouterModule.forChild(documentationRoutes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ]
})

export class DocRouterModule { }
