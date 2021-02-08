import { NgModule } from '@angular/core';

import { FuseIfOnDomDirective } from 'projects/flight-fuse-theme/src/@flight/directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseInnerScrollDirective } from 'projects/flight-fuse-theme/src/@flight/directives/fuse-inner-scroll/fuse-inner-scroll.directive';
import { FusePerfectScrollbarDirective } from 'projects/flight-fuse-theme/src/@flight/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseMatSidenavHelperDirective, FuseMatSidenavTogglerDirective } from 'projects/flight-fuse-theme/src/@flight/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive';

@NgModule({
    declarations: [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FusePerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FusePerfectScrollbarDirective
    ]
})
export class FuseDirectivesModule
{
}
