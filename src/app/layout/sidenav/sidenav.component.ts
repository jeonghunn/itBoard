import {
  Component, EventEmitter,
  OnInit, Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ],
})
export class SidenavComponent implements OnInit {

  @Output()
  public readonly toggleSidNav: EventEmitter<null> = new EventEmitter();

  public constructor(
    private router: Router,
  ) { }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

  public go(url: string): void {
    this.router.navigateByUrl(url).then(r => {
      this.toggleSidNav.emit();
    });
  }

}
