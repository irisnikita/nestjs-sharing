import { Controller, Get } from '@nestjs/common';

@Controller('todo-module')
export class TodoController {
  @Get()
  sayHello() {
    return { message: 'Welcome to Todo module' };
  }
}
