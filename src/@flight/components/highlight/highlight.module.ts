import { NgModule } from '@angular/core';

import { FuseHighlightComponent } from 'projects/deck/src/@flight/components/highlight/highlight.component';

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
