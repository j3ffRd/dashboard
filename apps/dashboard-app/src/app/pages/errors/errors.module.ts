import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './errors.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
  },
  {
    path: 'unauthorized',
    component: ErrorPageComponent,
    data: { type: 'unauthorized' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ErrorPageComponent],
  exports: [RouterModule],
})
export class ErrorPageModule {}
