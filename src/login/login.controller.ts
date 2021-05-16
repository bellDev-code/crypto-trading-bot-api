import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { KakaoLoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Get('kakao')
  async kakao(@Query() query: KakaoLoginDto) {
    console.log(query.code);
    try {
      const data = await this.loginService.kakaoToken(query.code);

      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
