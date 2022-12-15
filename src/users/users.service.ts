import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMyUser(id: number, req: Request) {
    const foundUser = await this.prisma.user.findUnique({ where: { id } });
    const decodedUserInfo = req.user as { id: number; email: string };
    console.log('id');
    if (!foundUser) {
      throw new NotFoundException();
    }

    delete foundUser.hashedPassword;

    return { user: foundUser };
  }
  async getMyUserbyEmail(email: string, req: Request) {
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    const decodedUserInfo = req.user as { id: number; email: string };
    console.log('id');
    if (!foundUser) {
      throw new NotFoundException();
    }

    delete foundUser.hashedPassword;

    return { user: foundUser };
  }
  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
    });

    return { users };
  }
}
