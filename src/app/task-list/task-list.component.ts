import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from '../actions';
import { ITask } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @select() tasks;

  model: ITask = {
    id: 0,
    description: "",
    developer: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  obSubmit() {
    this.ngRedux.dispatch({type: ADD_TASK, todo: this.model});
  }

  toggleTask(task) {
    this.ngRedux.dispatch({ type: TOGGLE_TASK, id: task.id });
  }

  removeTask(task) {
    this.ngRedux.dispatch({type: REMOVE_TASK, id: task.id });
  }
}
