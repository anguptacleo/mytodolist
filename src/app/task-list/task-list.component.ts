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
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Todotask[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  
  ngOnInit() {
  this.taskService.tasks$.subscribe(tasks => {
    this.tasks = tasks;
  });
}

  addTask(title: string) {
    this.taskService.addTask(title);
    this.tasks = this.taskService.getTasks(); // update task list
  }
  deleteTask(id: number): void {
  this.taskService.deleteTask(id);
}




  toggleFavourite(id: number) {
    this.taskService.toggleFavourite(id);
  }

  goToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
