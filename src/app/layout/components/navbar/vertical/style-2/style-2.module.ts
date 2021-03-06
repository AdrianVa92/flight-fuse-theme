import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseNavigationModule } from 'projects/deck/src/@flight/components';
import { FuseSharedModule } from 'projects/deck/src/@flight/shared.module';

import { NavbarVerticalStyle2Component } from 'projects/deck/src/app/layout/components/navbar/vertical/style-2/style-2.component';

@NgModule({
    declarations: [
        NavbarVerticalStyle2Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle2Component
    ]
})
export class NavbarVerticalStyle2Module
{
}
