import { Test, TestingModule } from '@nestjs/testing';
import { TodoFinalController } from './todo-final.controller';
import { TodoFinalService } from './todo-final.service';

describe('TodoFinalController', () => {
  let controller: TodoFinalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoFinalController],
      providers: [TodoFinalService],
    }).compile();

    controller = module.get<TodoFinalController>(TodoFinalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
