import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    login(user: any): Promise<{
        access_token: string;
        user: {
            email: string;
            name: string;
            picture: string;
        };
    }>;
}
