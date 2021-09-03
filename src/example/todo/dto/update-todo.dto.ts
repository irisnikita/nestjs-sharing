import { TodoStatus } from '../todo.interface';

export class UpdateTodoDto {
  title?: string;
  description?: string;
  status: TodoStatus;
}
