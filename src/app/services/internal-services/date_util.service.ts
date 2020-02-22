import { Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable ({
    providedIn: 'root'
})
export class DateUtilService {
    constructor() {}
    formatDate(value : Date) {
        return moment(value).format('DD-MM-YYYY');
    }

}