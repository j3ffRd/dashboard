import { Component, Input, OnChanges } from '@angular/core';
import { MenuItem } from '../../model/menuItem';
import { User } from '@dashboard-core';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnChanges  {
  @Input() user: User;
  @Input() menuItems: MenuItem[] = [];
  @Input() expanded: boolean;

  selectedItem: MenuItem;

  ngOnChanges(): void {
      this.selectedItem = null;
  }

}
