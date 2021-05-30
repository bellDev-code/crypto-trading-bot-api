import { Controller, Get, Session } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async users(@Session() session: any) {
    console.log(session);
    return {
      ok: true,
    };
  }
}
