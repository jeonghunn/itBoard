import {
  Component,
  OnInit,
} from '@angular/core';
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
  ) {
  }
  public ngOnInit(): void {
    this.colorSchemeService.load();
  }
}
