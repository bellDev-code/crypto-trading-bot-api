import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  isObject,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class KakaoLoginDto {
  @IsNotEmpty()
  code: string;
}

export class KakaoLoginResponseDto {
  @IsString()
  token_type: string;

  @IsString()
  access_token: string;

  @IsInt()
  expires_in: number;

  @IsString()
  refresh_token: string;

  @IsInt()
  refresh_token_expires_in: number;

  @IsString()
  scope?: string;
}

export class KakaoAccount {
  @IsBoolean()
  @IsOptional()
  has_email?: boolean;
  @IsBoolean()
  @IsOptional()
  email_needs_agreement?: boolean;
  @IsBoolean()
  @IsOptional()
  is_email_valid?: boolean;
  @IsBoolean()
  @IsOptional()
  is_email_verified?: boolean;
  @IsString()
  @IsOptional()
  email?: string;
}

export class KakaoMeResponse {
  @IsInt()
  id: number;

  @IsObject()
  @IsOptional()
  kakao_account?: KakaoAccount;

  @IsString()
  @IsOptional()
  synched_at?: string;

  @IsString()
  @IsOptional()
  connected_at?: string;

  @IsObject()
  @IsOptional()
  properties?: any;
}
