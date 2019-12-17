import { User } from './user';

export class Notification {
    sender: User;
    title: string;
    message: string;
    receiver: User;
    type: string;
    state: string;
    customData: string;
  }