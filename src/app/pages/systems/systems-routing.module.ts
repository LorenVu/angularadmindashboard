import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FunctionsComponent } from "./functions/functions.component";
import { PermissionsComponent } from "./permissions/permissions.component";
import { RoleComponent } from "./role/role.component";
import { UsersComponent } from "./users/users.component";


const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'functions',
        component: FunctionsComponent
    },
    {
        path: 'roles',
        component: RoleComponent
    },
    {
        path: 'permissions',
        component: PermissionsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }