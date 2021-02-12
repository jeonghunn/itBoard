import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';
import { Observable } from 'rxjs';
import Speech from 'speak-tts';
import { DataService } from '../core/data.service';
import { BroadcastSentence } from '../model/broadcast-sentence';

@Component({
  selector: 'app-itboard',
  templateUrl: './itboard.component.html',
  styleUrls: [ './itboard.component.scss' ],
})
export class ItboardComponent implements OnInit {

  public face: string = '^^7';
  public description: string = '안녕하세요';
  public speech: Speech;
  public isBroadcasting: boolean = false;

  public constructor(
   private dataService: DataService,
   private changeDetectorRef: ChangeDetectorRef,
   private childProcessService: ChildProcessService,
  ) {

  }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {

    this.speech = new Speech();
    this.speech.init(
      {
        'lang': 'ko-KR',
        'pitch': 0.7,
      },
    ).then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log('Speech is ready, voices are available', data);
      this.getitboardMessage();

    }).catch(e => {
      console.error('An error occured while initializing : ', e);
    });
  }

  public setLEDMessage(value: string): void {
    const options: string[] = [];
    this.childProcessService.childProcess.exec(`screen -S led -p 0 -X stuff "${value}"`,
      options,
      (error, stdout) => {
        return;
      });
  }

  public getitboardMessage(): void {
    this.isBroadcasting = true;
    const hour: number = new Date().getHours();
    this.dataService.getitboardMessage().subscribe(
      response => {
        if (response.data.broadcast_content.length > 0 && hour >= 9 && hour < 18) {
          this.announce(response.data.broadcast_content);
        }
      },
      // tslint:disable-next-line:no-empty
      e => {
      });

  }

  public announce(sentences: BroadcastSentence[], index: number = 0): void {
    this.face = sentences[index].face;
    this.description = sentences[index].content;
    // tslint:disable-next-line:brace-style
    if (sentences[index].display && sentences[index].display !== '') { this.setLEDMessage(sentences[index].display); }
    this.changeDetectorRef.detectChanges();
    let isNextAnnounceCalled: boolean = false;
    this.speech.speak({
      text: sentences[index].content,
      listeners: {
        onend: () => {
          if (!isNextAnnounceCalled) {
            if (sentences[index + 1] !== undefined) {
              this.announce(sentences, index + 1);
              isNextAnnounceCalled = true;
              console.log(index + 1);
            } else {
              this.isBroadcasting = false;
              this.changeDetectorRef.detectChanges();
            }
          }
        },
      },
    }).catch(e => {
      this.description = 'ERROR';
    });
  }

}
