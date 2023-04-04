import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('about')
  @Render('about')
  about() {
    return { message: 'This is the about page' };
  }

  @Get('contact')
  @Render('contact')
  contact() {
    return { message: 'This is the contact page' };
  }
}
