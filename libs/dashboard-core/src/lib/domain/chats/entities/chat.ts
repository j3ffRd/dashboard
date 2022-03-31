import { Chatter } from "./chatter";
import { Message } from "./message";

export class Chat {
    id: string;
    to: Chatter;
    messages: Message[];

    constructor(){
        this.messages = [];
    }
}
