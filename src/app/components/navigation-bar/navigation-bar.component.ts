import { Component, OnInit } from '@angular/core';
import { faCog, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {FirebaseMessagingService} from '../../services/firebase-messaging/firebase-messaging.service';
import {Conversation} from '../../models/conversation/conversation';
import { v4 as uuid } from 'uuid';
import {Message} from '../../models/message/message';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  faSettings = faCog;
  faHelp = faQuestion;

  constructor(private messagingService: FirebaseMessagingService) { }

  ngOnInit(): void {
  }

  test() {
    let c: Conversation = new Conversation();
    c.name = "Test";
    c.id = uuid();
    c.messsages = [];
    c.users = [];
    this.messagingService.createConversation(c);
    let m: Message = new Message();
    m.id = uuid();
    m.date = Date.now().toString();
    m.content = "Ceci est un message de test";
    this.messagingService.sendMessage(m,c);
  }

}
