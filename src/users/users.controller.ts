import { Controller, Get, Param, Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: { id: number }, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }
  @UseGuards(JwtAuthGuard)
  @Get('email/:email')
  getMyUserbyEmail(@Param() params: { email: string }, @Req() req) {
    return this.usersService.getMyUserbyEmail(params.email, req);
  }
  @Get()
  getUser() {
    return this.usersService.getUsers();
  }
}
