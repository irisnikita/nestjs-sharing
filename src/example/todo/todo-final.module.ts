import { Module } from '@nestjs/common';
import { TodoFinalService } from './todo-final.service';
import { TodoFinalController } from './todo-final.controller';

@Module({
  controllers: [TodoFinalController],
  providers: [TodoFinalService]
})
export class TodoFinalModule {}
