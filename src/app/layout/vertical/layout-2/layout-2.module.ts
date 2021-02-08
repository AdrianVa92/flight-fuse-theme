import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from 'projects/flight-fuse-theme/src/@flight/components';
import { FuseSharedModule } from 'projects/flight-fuse-theme/src/@flight/shared.module';

import { ContentModule } from 'projects/flight-fuse-theme/src/app/layout/components/content/content.module';
import { FooterModule } from 'projects/flight-fuse-theme/src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'projects/flight-fuse-theme/src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'projects/flight-fuse-theme/src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'projects/flight-fuse-theme/src/app/layout/components/toolbar/toolbar.module';

import { VerticalLayout2Component } from 'projects/flight-fuse-theme/src/app/layout/vertical/layout-2/layout-2.component';

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
