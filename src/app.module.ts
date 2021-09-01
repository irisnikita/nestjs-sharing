import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// Modules
import { TodoFinalModule } from './example/todo-final/todo-final.module';

//Controller
import { TodoController } from './example/todo-controller/todo.controller';

@Module({
  imports: [TodoFinalModule, ConfigModule.forRoot()],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
