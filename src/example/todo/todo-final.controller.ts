import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoFinalService } from './todo-final.service';
import { CreateTodoFinalDto } from './dto/create-todo-final.dto';
import { UpdateTodoFinalDto } from './dto/update-todo-final.dto';

@Controller('todo-final')
export class TodoFinalController {
  constructor(private readonly todoFinalService: TodoFinalService) {}

  @Post()
  create(@Body() createTodoFinalDto: CreateTodoFinalDto) {
    return this.todoFinalService.create(createTodoFinalDto);
  }

  @Get()
  findAll() {
    return this.todoFinalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoFinalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoFinalDto: UpdateTodoFinalDto) {
    return this.todoFinalService.update(+id, updateTodoFinalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoFinalService.remove(+id);
  }
}
