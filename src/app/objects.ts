import { Rooms } from './room'; 

export class Objects {
    id : number; 
    state : Boolean;
    macAddress : String;
    ipAddress : String;
    objectType : String;
    rooms : Rooms; 
}