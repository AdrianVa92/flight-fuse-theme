import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from 'projects/flight-fuse-theme/src/@flight/shared.module';

import { ContentComponent } from 'projects/flight-fuse-theme/src/app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        FuseSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
