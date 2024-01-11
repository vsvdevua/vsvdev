import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vsvdev';

  constructor(private translateService: TranslateService) {
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

  
}
