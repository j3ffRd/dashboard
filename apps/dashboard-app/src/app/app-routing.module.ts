import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashBoardPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/errors/errors.module').then((m) => m.ErrorPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
