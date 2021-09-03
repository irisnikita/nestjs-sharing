import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ValidateGuardMiddleware } from '../middleware/validate-guard.middleware';
import { TodoService } from './todo-service.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateGuardMiddleware).forRoutes('todo');
  }
}
