import { Controller, Get, Query, Res, Session } from '@nestjs/common';
import { Response } from 'express';
import { KakaoLoginDto, KakaoMeResponse } from './dtos/login.dto';
import { LoginService } from './login.service';

@Controller('login') // http://localhost:3090/login
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('kakao')
  async kakao(
    @Query() query: KakaoLoginDto,
    @Session() session: any,
    @Res() res: Response,
  ) {
    // console.log(query);
    try {
      console.log(session);
      const { data } = await this.loginService.kakaoToken(query.code);
      const me = await this.loginService.kakaoMe(data.access_token);
      console.log(me.data.id);

      session.access_token = data.access_token;
      session.refresh_token = data.refresh_token;
      res.redirect('http://localhost:3090/');

      // console.log(data.access_token);
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
