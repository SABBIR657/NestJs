import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'myself cp rukun';
  }

  getIntroduce(): string{
    return 'myself sabbir';
  }

  getpost(): string{
    return 'this is post';
  }
}
