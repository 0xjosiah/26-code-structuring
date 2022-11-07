import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
    constructor() {
        super()

        console.log('time init');
    }
}