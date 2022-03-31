import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@dashboard-core';
import { Language } from '../../model/language';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;
  @Input() notifications: string[] = [];
  @Input() languages: Language[] = [];
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() selectLanguage = new EventEmitter<Language>();
  @Output() toggleSideBar = new EventEmitter<void>();
  @Output() toggleChatBar = new EventEmitter<void>();

  expanded: boolean;
  fullScreen: boolean;
  
  onToggleMenu(): void {
    this.expanded = !this.expanded;
    this.toggleMenu.emit();
  }

  onToggleSideBar(): void {
    this.toggleSideBar.emit();
  }

  onToggleChatBar(): void {
    this.toggleChatBar.emit();
  }

  onSelectLanguage(value: Language) {
    this.selectLanguage.emit(value);
  }

  toggleFullScreen() {
    const elem = document.documentElement;

    if (!this.fullScreen) {
      elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
    this.fullScreen = !this.fullScreen;
  } 
}
