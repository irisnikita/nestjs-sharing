import { v4 as uuidv4 } from 'uuid';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// Dto
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

type TTodo = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: TodoStatus;
};

export enum TodoStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

let todoList: TTodo[] = [
  {
    id: '1',
    title: 'Học bài',
    description: 'Học bài anh văn',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
  {
    id: '2',
    title: 'Thể dục',
    description: 'Đá banh',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
  {
    id: '3',
    title: 'Quét nhà',
    description: 'Quét nhà, rửa chén, nấu cơm',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
  {
    id: '4',
    title: 'FreeFire',
    description: 'Chơi lửa chùa',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
  {
    id: '5',
    title: 'Sao kê',
    description: 'Sao kê chi tiêu',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
  {
    id: '6',
    title: 'Kiếm bồ',
    description: 'Kiếm người yêu giàu',
    createdAt: new Date(),
    status: TodoStatus.OPEN,
  },
];

@Controller('todo-controller')
export class TodoController {
  @Get()
  findAll(): TTodo[] {
    return todoList;
  }

  @Get(':id')
  findById(@Param() param): TTodo | Record<string, unknown> {
    const { id } = param;

    return todoList.find((todo) => todo.id === id) || {};
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): TTodo {
    const { title, description } = createTodoDto;

    const newTodo: TTodo = {
      id: uuidv4(),
      title,
      description,
      createdAt: new Date(),
      status: TodoStatus.OPEN,
    };

    todoList.push(newTodo);

    return newTodo;
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Record<string, unknown> {
    const { title, description, status } = updateTodoDto;

    todoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title || todo.title,
          description: description || todo.description,
          status: status || todo.status,
        };
      }
      return todo;
    });

    return { message: 'Update todo success' };
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Record<string, unknown> {
    todoList = todoList.filter((todo) => todo.id !== id);

    return { message: 'Remove todo success' };
  }
}
