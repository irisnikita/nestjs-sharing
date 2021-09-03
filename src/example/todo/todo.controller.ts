// Libraries
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

// Services
import { TodoService } from './todo-service.service';
import { TTodo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): TTodo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): TTodo | Record<string, unknown> {
    return this.todoService.findById(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): TTodo {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Record<string, unknown> {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Record<string, unknown> {
    return this.todoService.delete(id);
  }
}
