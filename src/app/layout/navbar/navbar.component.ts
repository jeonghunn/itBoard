import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ],
})
export class NavbarComponent implements OnInit {

  @Output()
  public readonly toggleSidNav: EventEmitter<null> = new EventEmitter();

  // tslint:disable-next-line:no-empty
  public constructor(
    public router: Router,
  ) { }

  public get isMainPage(): boolean {
    return window?.location?.pathname.includes('main') || window?.location?.pathname === '';
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

  public go(url: string): void {
    this.router.navigateByUrl(url).then(r => {
      return undefined;
    });
  }

}
