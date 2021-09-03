import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// Modules
import { TodoFinalModule } from './example/todo/todo-final.module';
import { TodoModule as TodoServiceModule } from './example/todo-service/todo.module';
import { TodoModule } from './example/todo-controller/todo.module';

@Module({
  imports: [TodoModule, TodoServiceModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
