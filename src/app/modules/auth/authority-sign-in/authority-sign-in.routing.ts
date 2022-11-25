import { Route } from '@angular/router';
import { AuthorityAuthSignInComponent } from 'app/modules/auth/authority-sign-in/authority-sign-in.component';

export const authorityAuthSignInRoutes: Route[] = [
    {
        path     : '',
        component: AuthorityAuthSignInComponent
    }
];
