import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class ValidationJWT implements NestMiddleware {
  constructor(
    private readonly userServices: UsersService,
    private readonly loginService: LoginService,
  ) {}

  async use(req, res: Response, next: NextFunction) {
    try {
      const token: string = req.headers.authorization?.split(' ')[1];
      await this.loginService.verifyToken(token);

      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid Token');
    }
  }
}
