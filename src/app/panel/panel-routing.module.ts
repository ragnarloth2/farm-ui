import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload/upload.component';
import {ProductConferenceComponent} from './upload/product-conference/product-conference.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'nfe'
    },
    {
        path: 'nfe',
        component: UploadComponent
    },
    {
        path: 'nfe/conf',
        component: ProductConferenceComponent
    },
    {
        path: 'farm',
        data: {
            title: 'Nota Fiscal',
            headerDisplay: 'none'
        },
        loadChildren: () => import('./farm/farm.module').then(m => m.FarmModule)
    },
    {
        path: 'employee',
        data: {
            title: 'Funcionários',
            headerDisplay: 'none'
        },
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'animal',
        data: {
            title: 'Animais',
            headerDisplay: 'none'
        },
        loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PanelRoutingModule {
}
