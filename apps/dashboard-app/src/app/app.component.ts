import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from '@dashboard-menu';
import { Language } from '@dashboard-header';
import { LoginUseCase, User } from '@dashboard-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  menuExpanded: boolean;
  sideBarExpanded: boolean;
  chatBarExpanded: boolean;
  menuItems: MenuItem[];
  languages: Language[];
  user: User;

  constructor(private loginUseCase: LoginUseCase) {    
  }

  async ngOnInit(): Promise<void> {
    this.menuItems = this.getMenuItems();
    this.languages = [{code: 'En', country: 'us', selected: true}, {code: 'Fr', country: 'fr', selected: false}];
    this.user = await this.loginUseCase.loginWithGoogle();
  }

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
  }

  toggleSideBar(): void {
    this.sideBarExpanded = !this.sideBarExpanded;    
  }

  toggleChatBar(): void {
    this.chatBarExpanded = !this.chatBarExpanded;
  }

  selectLanguage(language: Language) {
    console.log('Selected language : ', language);
  }

  getMenuItems(): MenuItem[] {
    return [
      {icon: 'home', label: 'Home', url: '/login', items: []}, 
      {icon: 'id-card', label: 'Profile', url: '', items: []}, 
      {icon: 'info-circle', label: 'Help', url: '', items: []}, 
      {icon: 'credit-card', label: 'Creditcard', url: '', items: []}, 
      {icon: 'comments', label: 'Contact', url: '', items: []}, 
      {icon: 'inbox', label: 'Messages', url: '', items: [
        {icon: '', label: 'Inbox', url: '', items: []},
        {icon: '', label: 'Outbox', url: '', items: []}
      ]}, 
      {icon: 'sliders-v', label: 'Settings', url: '', items: []}, 
      {icon: 'wallet', label: 'Wallet', url: '', items: []}, 
      {icon: 'map-marker', label: 'Localisation', url: '', items: []}, 
      {icon: 'cloud-download', label: 'Download', url: '', items: []}
    ];
  }
}
