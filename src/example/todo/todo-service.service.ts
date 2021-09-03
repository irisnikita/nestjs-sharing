// Libraries
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { v4 as uuidv4 } from 'uuid';

// Interface
import { TodoStatus, TTodo } from './todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  todoList: TTodo[] = [
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
  ];

  findAll(): TTodo[] {
    return this.todoList;
  }

  findById(id: string): TTodo {
    return this.todoList.find((todo) => todo.id === id);
  }

  create(createTodoDto: CreateTodoDto): TTodo {
    const { title, description } = createTodoDto;

    const newTodo: TTodo = {
      id: uuidv4(),
      title,
      description,
      createdAt: new Date(),
      status: TodoStatus.OPEN,
    };

    this.todoList.push(newTodo);

    return newTodo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Record<string, unknown> {
    const { title, description, status } = updateTodoDto;

    this.todoList = this.todoList.map((todo) => {
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

  delete(id: string): Record<string, unknown> {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);

    return { message: 'Remove todo success' };
  }
}
