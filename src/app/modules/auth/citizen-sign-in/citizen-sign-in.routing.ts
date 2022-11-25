import { Route } from '@angular/router';
import { CitiAuthSignInComponent } from 'app/modules/auth/citizen-sign-in/citizen-sign-in.component';

export const citiAuthSigninRoutes: Route[] = [
    {
        path     : '',
        component: CitiAuthSignInComponent
    }
];
