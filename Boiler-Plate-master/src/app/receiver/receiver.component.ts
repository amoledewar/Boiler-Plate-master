import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})

export class ReceiverComponent {

  message: string;
  constructor(private data: MessagesService) { }
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
