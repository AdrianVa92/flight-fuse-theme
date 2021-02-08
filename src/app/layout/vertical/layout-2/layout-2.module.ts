import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from 'projects/deck/src/@flight/components';
import { FuseSharedModule } from 'projects/deck/src/@flight/shared.module';

import { ContentModule } from 'projects/deck/src/app/layout/components/content/content.module';
import { FooterModule } from 'projects/deck/src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'projects/deck/src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'projects/deck/src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'projects/deck/src/app/layout/components/toolbar/toolbar.module';

import { VerticalLayout2Component } from 'projects/deck/src/app/layout/vertical/layout-2/layout-2.component';

@NgModule({
    declarations: [
        VerticalLayout2Component
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout2Component
    ]
})
export class VerticalLayout2Module
{
}
