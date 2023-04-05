import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('register')
  @Render('register')
  register() {
    return { message: 'Register' };
  }

  @Get('login')
  @Render('login')
  login() {
    return { message: 'This is the login page/' };
  }

  @Get('*')
  @Render('404')
  root() {
    return { message: 'Hello world!' };
  }
}
