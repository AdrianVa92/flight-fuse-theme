import { FuseNavigation } from 'projects/deck/src/@flight/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'Home',
                title    : 'Home',
                type     : 'item',
                icon     : 'home',
                url      : '/home',
            },
            {
                id: 'macquarie-today',
                title: 'Macquarie today',
                type: 'item',
                icon: 'access_time',
                url: '/macquarie-today',
            },
            {
                id: 'staff-overview',
                title: 'Staff Overview',
                type: 'item',
                icon: 'group',
                url: '/staff-overview',
            },
            {
                id: 'staff-summary',
                title: 'Staff Summary',
                type: 'item',
                icon: 'group',
                url: '/staff-summary',
            },
            {
                id: 'application-library',
                title: 'Application Library',
                type: 'item',
                icon: 'apps',
                url: '/application-library',
            }
        ]
    }
];
