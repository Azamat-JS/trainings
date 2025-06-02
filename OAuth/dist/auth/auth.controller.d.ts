import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): Promise<{
        access_token: string;
        user: {
            email: string;
            name: string;
            picture: string;
        };
    }>;
    githubAuth(req: any): Promise<void>;
    githubAuthRedirect(req: any): Promise<{
        access_token: string;
        user: {
            email: string;
            name: string;
            picture: string;
        };
    }>;
}
