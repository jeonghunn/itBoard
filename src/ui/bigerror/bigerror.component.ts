import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-bigerror',
  templateUrl: './bigerror.component.html',
  styleUrls: [ './bigerror.component.scss' ],
})
export class BigerrorComponent implements OnInit {

  @Input()
  public imageUrl: string;

  @Input()
  public title: string;

  @Input()
  public description: string;

  // tslint:disable-next-line:no-empty
  public constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

}
