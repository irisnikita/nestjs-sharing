import { Test, TestingModule } from '@nestjs/testing';
import { TodoFinalService } from './todo-final.service';

describe('TodoFinalService', () => {
  let service: TodoFinalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoFinalService],
    }).compile();

    service = module.get<TodoFinalService>(TodoFinalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
