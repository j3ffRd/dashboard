import { Component, Input } from '@angular/core';
import { User } from '@dashboard-core';

@Component({
  selector: 'dashboard-header-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  @Input() user: User; 
}
