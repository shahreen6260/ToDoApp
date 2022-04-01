import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public inputTodo: string = "";
  public todos!: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        completed: false
      },
      {
        content: "Second Todo",
        completed: false
      },
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id)
        v.completed = !v.completed;
      return v;
    })
  }
//remove form array
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  //pushing new obj into array
  addTodo() {
    if (this.inputTodo != "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
      this.inputTodo = "";//empty input filed 
    }

  }
}
