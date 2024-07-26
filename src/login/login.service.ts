import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async createJWT(createLoginDto: CreateLoginDto) {
    // const data = createLoginDto;
    const data = {
      user: {
        email: 'test1@gmail.com',
        password: 'G7#yK8!rT$w9@z1F',
        role: 'admin',
      },
    };
    const token = this.jwtService.sign(data, { expiresIn: 200 });

    return {
      token: token,
    };
  }

  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
      const decoded = await this.jwtService.decode(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
