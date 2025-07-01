import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { ChatService } from "./chat.service";
import { Server, Socket } from "socket.io";
import { ChatDto } from "./dto/ChatDto";

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log("Client connected", client.id, client.handshake.time);
  }

  handleDisconnect(client: Socket) {
    console.log("Client disconnected", client.id, client.handshake.time);
  }

  @SubscribeMessage("send-message")
  handleSendMessage(@MessageBody() payload: ChatDto) {
    const message = this.chatService.sendMessage(payload.username, payload.message);
    this.server.emit('new-message', message);
  }

  @SubscribeMessage('delete-message')
  handleDeleteMessage(@MessageBody() messageId: string){
    const success = this.chatService.deleteMessage(messageId);
    if(success){
      this.server.emit('message-deleted', messageId)
    }
  }
}
