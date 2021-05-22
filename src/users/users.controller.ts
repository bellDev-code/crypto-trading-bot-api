import { Controller, Get, Session } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async users() {
    /**
     * @TODO
     * 사용자 token 가져와서 인증하기
     */
    return {
      ok: true,
    };
  }
}
