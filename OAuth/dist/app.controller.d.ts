import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProtected(req: any): {
        message: string;
        user: any;
    };
}
