import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(user: any) {
    // Foydalanuvchi ma'lumotlarini MongoDB'ga saqlash
    const userData = {
      email: user.email,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      name: user.name || '',
      picture: user.picture || '',
      accessToken: user.accessToken,
    };
    const savedUser = await this.usersService.createOrFindUser(userData);

    const payload = { email: savedUser.email, sub: savedUser.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: savedUser.email,
        name: savedUser.name || `${savedUser.firstName} ${savedUser.lastName}`,
        picture: savedUser.picture,
      },
    };
  }
}