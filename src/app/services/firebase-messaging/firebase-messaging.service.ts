import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Message} from '../../models/message/message';
import {Conversation} from '../../models/conversation/conversation';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {

  constructor(private firebaseDb: AngularFireDatabase) { }

  sendMessage(message: Message, conversation: Conversation) {
    this.firebaseDb.object('conversations/'+conversation.id+'/messages').set(message).then( () => console.log("Created message")).catch( err => console.error(err));
  }

  createConversation(conversation: Conversation) {
    this.firebaseDb.object('conversations/'+conversation.id).set(conversation).then( () => console.log("Created conversation")).catch( err => console.error(err));
  }
  
}
