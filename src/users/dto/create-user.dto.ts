const roles = ['basic', 'admin'] as const;

import { IsEmail, IsIn, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsIn(roles)
  role: string;
}
