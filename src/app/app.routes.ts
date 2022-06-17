import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const app_routes: Routes = [
    {path: 'home', component: Component},
    {path: 'cliente', component: Component},
    {path: 'producto', component: Component},
]

export const app_routing = RouterModule.forRoot(app_routes);