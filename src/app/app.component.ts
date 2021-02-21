import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColorSchemeService } from './core/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  public title: string = 'itBoard';
  public isSideNavOpen: boolean = false;

  public constructor(
    public colorSchemeService: ColorSchemeService,
    public translateService: TranslateService,
    public changeDetectorRef: ChangeDetectorRef,
  ) {
    translateService.setDefaultLang(translateService.getBrowserLang());
  }
  public ngOnInit(): void {
    this.colorSchemeService.load();
  }

  public toggleSidNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
