import { Route } from '@angular/router';
import { CitiAuthSignUpComponent } from 'app/modules/auth/citizen-sign-up/citizen-sign-up.component';

export const citiAuthSignupRoutes: Route[] = [
    {
        path     : '',
        component: CitiAuthSignUpComponent
    }
];
