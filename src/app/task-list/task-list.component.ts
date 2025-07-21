import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { TaskService } from '../task.service';
import { Todotask } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Todotask[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  addTask(title: string) {
    this.taskService.addTask(title);
    this.tasks = this.taskService.getTasks(); // update task list
  }


  toggleFavourite(id: number) {
    this.taskService.toggleFavourite(id);
  }

  goToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
