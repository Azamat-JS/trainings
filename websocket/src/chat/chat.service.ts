import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

interface Message {
    id: string;
    username: string;
    message: string;
    time:string
}

@Injectable()
export class ChatService {
    private messages: Message[] = [];

    sendMessage(username: string, message: string):Message{
        const newMessage = {
            id: randomUUID(),
            username,
            message,
            time: new Date().toISOString()
        };
        this.messages.push(newMessage);
        return newMessage;
    }

    deleteMessage(id: string): boolean {
        const index = this.messages.findIndex(message => message.id === id)
        if(index !== -1){
            this.messages.splice(index, 1)
            return true;
        }
        return false;
    }
}
