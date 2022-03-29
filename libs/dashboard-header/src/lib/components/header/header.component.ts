import { Component, Input } from '@angular/core';
import { User } from '@dashboard-core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;
  @Input() notifications: string[] = [];
}
