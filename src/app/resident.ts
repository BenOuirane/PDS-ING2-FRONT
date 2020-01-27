import { User } from './user';
import { Room } from './room'; 

export class Resident {
    idResident: number; 
    firstName: String; 
    lastName: String; 
    age: number; 
    room : Room; 
    user : User; 
  }