import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) {}

  async kakaoToken(code: string) {
    return this.httpService.axiosRef({
      method: 'post',
      url: 'https://kauth.kakao.com/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: '',
        redirect_uri: 'https://6a0fa8955515.ngrok.io/login/kakao/',
        code: code,
      },
      headers: {
        Host: 'kauth.kakao.com',
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
      },
    });
  }
}
