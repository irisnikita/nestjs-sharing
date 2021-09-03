import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// Modules
import { TodoModule } from './example/todo/todo.module';
import { TodoModule as TodoServiceModule } from './example/todo-service/todo.module';
import { TodoModule as TodoControllerModule } from './example/todo-controller/todo.module';

@Module({
  imports: [
    TodoControllerModule,
    TodoModule,
    TodoServiceModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
