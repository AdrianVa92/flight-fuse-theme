import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from 'projects/deck/src/@flight/services/config.service';

@NgModule()
export class FuseModule
{
    constructor(@Optional() @SkipSelf() parentModule: FuseModule)
    {
        if ( parentModule )
        {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<FuseModule>
    {
        return {
            ngModule : FuseModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
