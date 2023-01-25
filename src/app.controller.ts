import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get('/introduce')

  getIntroduce(): string {
    return this.appService.getIntroduce();
  }

  @Get('/trash')
  Trash(): String {
    return "hello it's Trash";
  }

  @Post()
  getpost(): string{
    return "it's post";
  }
  
}
