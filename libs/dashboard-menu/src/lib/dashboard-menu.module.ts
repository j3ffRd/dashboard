import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule,  BrowserAnimationsModule],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class DashboardMenuModule {}
