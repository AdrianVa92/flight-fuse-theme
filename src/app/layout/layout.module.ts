import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from 'projects/deck/src/app/layout/vertical/layout-1/layout-1.module';
import { VerticalLayout2Module } from 'projects/deck/src/app/layout/vertical/layout-2/layout-2.module';
import { VerticalLayout3Module } from 'projects/deck/src/app/layout/vertical/layout-3/layout-3.module';

import { HorizontalLayout1Module } from 'projects/deck/src/app/layout/horizontal/layout-1/layout-1.module';
import { FullModule } from './full/full.module';
import { TwopageModule } from './twopage/twopage.module';

@NgModule({
    imports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module,
        FullModule,
        TwopageModule
    ],
    exports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module,
        FullModule,
        TwopageModule

    ]
})
export class LayoutModule
{
}
