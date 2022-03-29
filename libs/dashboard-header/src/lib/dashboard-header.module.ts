import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BadgeModule } from 'primeng/badge';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { UserComponent } from './components/user/user.component';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  imports: [
    CommonModule, 
    BadgeModule, 
    DropdownModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    OverlayPanelModule
  ],
  declarations: [
    HeaderComponent,
    UserComponent,
    LanguageComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class DashboardHeaderModule {}
