import { v4 as uuidv4 } from 'uuid';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

// Dto
import { CreateTodoDto } from './create-todo.dto';

type TTodo = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
};

let todoList: TTodo[] = [
  {
    id: '1',
    title: 'Học bài',
    description: 'Học bài anh văn',
    createdAt: new Date(),
  },
  { id: '2', title: 'Thể dục', description: 'Đá banh', createdAt: new Date() },
  {
    id: '3',
    title: 'Quét nhà',
    description: 'Quét nhà, rửa chén, nấu cơm',
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'FreeFire',
    description: 'Chơi lửa chùa',
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Sao kê',
    description: 'Sao kê chi tiêu',
    createdAt: new Date(),
  },
  {
    id: '6',
    title: 'Kiếm bồ',
    description: 'Kiếm người yêu giàu',
    createdAt: new Date(),
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
    };

    todoList.push(newTodo);

    return newTodo;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Record<string, unknown> {
    todoList = todoList.filter((todo) => todo.id !== id);

    return { message: 'Xóa thành công' };
  }
}
