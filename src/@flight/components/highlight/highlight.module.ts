import { NgModule } from '@angular/core';

import { FuseHighlightComponent } from 'projects/flight-fuse-theme/src/@flight/components/highlight/highlight.component';

@NgModule({
    declarations: [
        FuseHighlightComponent
    ],
    exports: [
        FuseHighlightComponent
    ],
})
export class FuseHighlightModule
{
}
