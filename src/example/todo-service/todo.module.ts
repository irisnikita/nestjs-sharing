import { Module } from '@nestjs/common';
import { TodoService } from './todo-service.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
