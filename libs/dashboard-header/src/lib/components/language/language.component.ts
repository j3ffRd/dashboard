import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Language } from '../../model/language';

@Component({
  selector: 'dashboard-header-languages',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageComponent {
  @Input() languages: Language[] = [];
  @Output() selectLanguage = new EventEmitter<Language>();

  selectedCountry: Language;

  onSelectLanguage(event: {value: Language}) {
    this.selectLanguage.emit(event.value);
  }
}
