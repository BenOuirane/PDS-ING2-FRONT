import { User } from './user';
import { Room } from './room';
import { Residence } from './residence';


export class Resident {
    idResident: number;
    firstName: String;
    lastName: String;
    age: number;
    room : Room;
    user : User;
    residence: Residence;
    idRoom : number;

  }
