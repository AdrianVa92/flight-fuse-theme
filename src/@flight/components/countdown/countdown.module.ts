import { NgModule } from '@angular/core';

import { FuseCountdownComponent } from 'projects/flight-fuse-theme/src/@flight/components/countdown/countdown.component';

@NgModule({
    declarations: [
        FuseCountdownComponent
    ],
    exports: [
        FuseCountdownComponent
    ],
})
export class FuseCountdownModule
{
}
