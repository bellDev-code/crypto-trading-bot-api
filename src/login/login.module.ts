import { HttpModule, Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [HttpModule, UsersModule],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
