import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: string;
  constructor(private data: MessagesService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMessage() {
    this.data.changeMessage("Hello from Parent");
  }
}