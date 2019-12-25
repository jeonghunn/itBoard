import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
import { DataService } from '../core/data.service';
import { BroadcastSentence } from '../model/broadcast-sentence';

@Component({
  selector: 'app-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: [ './announcer.component.scss' ],
})
export class AnnouncerComponent implements OnInit {

  public face: string = '^^7';
  public description: string = '안녕하세요';
  public speech: Speech;

  public constructor(
   private dataService: DataService,
  ) { }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {

    this.speech = new Speech();
    this.speech.init(
      {
        'lang': 'ko-KR',
      },
    ).then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log('Speech is ready, voices are available', data);
      this.getAnnouncerMessage();

    }).catch(e => {
      console.error('An error occured while initializing : ', e);
    });
  }

  public getAnnouncerMessage(): void {
    this.dataService.getAnnouncerMessage().subscribe(
      response => {
        this.announce(response.data.broadcast_content);
      },
      // tslint:disable-next-line:no-empty
      e => {

      });

  }

  public announce(sentences: BroadcastSentence[], index: number = 0): void {
    this.face = sentences[index].face;
    this.description = sentences[index].content;
    this.speech.speak({
      text: sentences[index].content,
      listeners: {
        onend: () => {
          if (sentences[index + 1] !== undefined) {
            this.announce(sentences, index + 1);
          }
        },
      },
    }).catch(e => {
      this.description = 'ERROR';
    });
  }

}
