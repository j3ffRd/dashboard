import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from '../../model/menuItem';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('expanded', style({
        width: '250px',
      })),
      state('minimized', style({
        width: '56px',
      })),
      transition('minimized => expanded', [
        animate('0.1s')
      ]),
      transition('expanded => minimized', [
        animate('0.1s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnChanges  {
  @Input() menuItems: MenuItem[] = [];
  @Input() expanded: boolean;

  selectedItem: MenuItem;

  ngOnChanges(): void {
      this.selectedItem = null;
  }

}
