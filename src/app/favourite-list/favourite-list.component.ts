import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Todotask } from '../task.model';

@Component({
  selector: 'app-favourite-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss']
})
export class FavouriteListComponent implements OnInit {
  todos: Todotask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.todos = this.taskService.getFavouriteTasks();
  }
}
