import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: './pages/pages.module#PagesModule'
    }, {
        path: 'inicio',
        loadChildren: './inicio/inicio.module#InicioModule'
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: 'inicio' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }
