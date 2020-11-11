import {User} from '../user/user';
import {Message} from '../message/message';

export class Conversation {

  id: string;
  name: string;
  users: User[];
  messsages: Message[];

}
