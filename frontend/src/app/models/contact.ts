import { position } from './position';

export class contact {
    constructor(
        public name: string,
        public phone: string,
        public position: position,
        public userpic: any
    ) {}
}