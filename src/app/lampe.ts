import { Objects } from './objects'; 

export class Lampe {
    idLamp : Number; 
    status : Boolean;
    hourOn : String;
    hourOff : String;
    intensity : number;
    color : String;
    colorUsine : String;
    statusUsine : Boolean;
    hourOnUsine : String;
    hourOffUsine : String;
    intensityUsine : number;
    object : Objects;
}