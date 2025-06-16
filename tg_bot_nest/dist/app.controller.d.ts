import { AppService } from "./app.service";
import { Context } from "./app.interface";
export declare class AppUpdate {
    private readonly appService;
    constructor(appService: AppService);
    startCommand(ctx: Context): Promise<void>;
    helpCommand(ctx: Context): Promise<void>;
    handleTasks(ctx: Context): Promise<void>;
    handleUserTasks(ctx: Context): Promise<void>;
    handleYes(ctx: Context): Promise<void>;
    handleNo(ctx: Context): Promise<void>;
    handleCompleted(ctx: Context): Promise<void>;
    getMessage(message: string, ctx: Context): Promise<void>;
}
