import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoFinalDto } from './create-todo-final.dto';

export class UpdateTodoFinalDto extends PartialType(CreateTodoFinalDto) {}
