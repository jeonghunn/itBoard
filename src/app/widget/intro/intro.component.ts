import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: [ './intro.component.scss' ],
})
export class IntroComponent implements OnInit {

  public constructor(
    public router: Router,
  ) { }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

  public go(url: string): void {
    this.router.navigateByUrl(url).then(r => {
      return undefined;
    });
  }

}
