import {Conversation} from '../conversation/conversation';

export class User {
  id: string;
  userName: string;
  email: string;
  conversations: Conversation[];
}
