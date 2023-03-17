import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Visit dad'),
    new Task('Go shopping'),
    new Task('Go to the gym'),
    new Task('Take out gsarbage'),
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(presentTask: Task) {
    let userConfirmed = confirm(
      `Are you sure you want to remove this? \n" ${presentTask.title}"`
    );
    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != presentTask);
    }
  }
}

class Task {
  constructor(public title: string) {}

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
