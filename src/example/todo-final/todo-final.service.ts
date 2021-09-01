import { Injectable } from '@nestjs/common';
import { CreateTodoFinalDto } from './dto/create-todo-final.dto';
import { UpdateTodoFinalDto } from './dto/update-todo-final.dto';

@Injectable()
export class TodoFinalService {
  create(createTodoFinalDto: CreateTodoFinalDto) {
    return 'This action adds a new todoFinal';
  }

  findAll() {
    return `This action returns all todoFinal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todoFinal`;
  }

  update(id: number, updateTodoFinalDto: UpdateTodoFinalDto) {
    return `This action updates a #${id} todoFinal`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoFinal`;
  }
}
