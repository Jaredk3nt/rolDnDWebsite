import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DocComponent } from './doc.component';
import { DocInfoComponent } from './docinfo.component';
import { WorldDocComponent } from './world/worlddoc.component';
import { CharacterDocComponent } from './character/characterdoc.component';
import { MonsterDocComponent } from './monsters/monsterdoc.component';

import { MenuItemComponent } from './menu-item.component';

const documentationRoutes: Routes = [
    {
        path: 'documentation', component: DocComponent , children: [
            { path: '', component: DocInfoComponent, children: [
                { path: 'world', component: WorldDocComponent },
                { path: 'character', component: CharacterDocComponent },
                { path: 'monsters', component: MonsterDocComponent }
            ] }
        ]
    }
];

@NgModule ({
    declarations: [
        DocComponent,
        DocInfoComponent,
        WorldDocComponent,
        CharacterDocComponent,
        MonsterDocComponent,
        MenuItemComponent
    ],
    imports: [
        RouterModule.forChild(documentationRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ]
})

export class DocRouterModule { }
