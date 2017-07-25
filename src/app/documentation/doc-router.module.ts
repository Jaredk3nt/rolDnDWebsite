import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocComponent } from './doc.component';
import { DocInfoComponent } from './docinfo.component';
import { WorldDocComponent } from './world/worlddoc.component';
import { CharacterDocComponent } from './character/characterdoc.component';
import { MonsterDocComponent } from './monsters/monsterdoc.component';

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
        MonsterDocComponent
    ],
    imports: [
        RouterModule.forChild(documentationRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DocRouterModule { }
