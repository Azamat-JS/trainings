import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { ChatService } from "./chat.service";
import { Server, Socket } from "socket.io";

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

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: any) {
    console.log(`Received message from ${client.id}`, payload);
    this.server.emit("message", payload);
  }
}
