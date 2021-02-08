import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FuseSidebarModule, FuseThemeOptionsModule } from 'projects/flight-fuse-theme/src/@flight/components';
import { FuseSharedModule } from 'projects/flight-fuse-theme/src/@flight/shared.module';

import { ContentModule } from 'projects/flight-fuse-theme/src/app/layout/components/content/content.module';
import { FooterModule } from 'projects/flight-fuse-theme/src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'projects/flight-fuse-theme/src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'projects/flight-fuse-theme/src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'projects/flight-fuse-theme/src/app/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'projects/flight-fuse-theme/src/app/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
