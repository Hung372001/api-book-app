import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, AuthDtoLogin } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from './../utils/constants';
import { Request, Response } from 'express';
// import ServiceResponse from '../'
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signUp(dto: AuthDto) {
    const { email, password, FirstName, LastName, phoneNumber } = dto;
    const foundEmail = await this.prisma.user.findUnique({ where: { email } });
    const foundPhoneNumber = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (foundPhoneNumber) {
      return { isError: true, message: 'So Dien Thoai Da Ton Tai' };
    }
    if (foundEmail) {
      return { isError: true, message: 'Email Da Ton Tai' };
    }

    const hashedPassword = await this.hashPassword(password);
    await this.prisma.user.create({
      data: {
        email,
        hashedPassword,
        FirstName,
        LastName,
        phoneNumber,
      },
    });
    return { isError: false, message: 'Dang ki Thanh Cong' };
  }
  async signIn(dto: AuthDtoLogin, req: Request, res: Response) {
    const { email, password } = dto;
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      return res.status(401).json('email khong ton tai');
    }
    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.hashedPassword,
    });
    if (!isMatch) {
      console.log('dangw nhap tb');
      return res.status(401).json('mat khau sai'); //401 Unauthenticated
    }
    const token = await this.signToken({
      id: foundUser.id,
      email: foundUser.email,
    });
    if (!token) {
      console.log('dangw nhap tb');
      throw new ForbiddenException(); //500
    }
    res.cookie('token', token, { httpOnly: true }); // httpOnly (cookie options): chặn script=> không get được cookie thông qua js
    return res.status(200).json({ Message: 'Logged in success.', data: email });
  }
  async signOut(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ Message: 'Logged out suc' });
  }
  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }
  async signToken(asrgs: { id: number; email: string }) {
    const payload = asrgs;
    return this.jwt.signAsync(payload, { secret: jwtSecret });
  }
}
