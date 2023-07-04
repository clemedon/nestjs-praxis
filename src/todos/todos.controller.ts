import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos') // localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // @Get for …/todos GET request

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  // @Post for …/todos POST request
  @Post()
  // @Body allows us to retrieve the body of the POST request
  createTodo(@Body() newTodo: Todo) {
    console.log('newTodo = ', newTodo);
    // We pass this body to our service
    this.todosService.create(newTodo);
  }
}
