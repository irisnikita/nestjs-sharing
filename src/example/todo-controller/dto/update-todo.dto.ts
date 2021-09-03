import { TodoStatus } from '../todo.controller';

export class UpdateTodoDto {
  title?: string;
  description?: string;
  status: TodoStatus;
}
