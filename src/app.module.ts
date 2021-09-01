import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoFinalModule } from './example/todo-final/todo-final.module';
import { TodoController } from './example/todo-controller/todo.controller';

@Module({
  imports: [TodoFinalModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
