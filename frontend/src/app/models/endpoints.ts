import {environment} from '../../environments/environment';

export class Endpoints {
    public environment = environment;
    public static getAllContacts = `${environment.apiUri}/contacts`;
    public static getContact = `${environment.apiUri}/contact`;
    public static createContact = `${environment.apiUri}/contact/create`;
    public static deleteContact =  `${environment.apiUri}/contact/delete`;

    constructor() {}
}