import { User } from './user';
import { Rooms } from './room'; 
import { Residence } from './residence';


export class Resident {
    idResident: number; 
    firstName: String; 
    lastName: String; 
    age: number; 
    room : Rooms; 
    user : User; 
    residence: Residence;
  }