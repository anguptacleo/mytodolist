import { Injectable } from '@angular/core';
import { Todotask } from './task.model';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Todotask[] = [
    { id: 1, title: 'Learn Angular', isFavourite: false },
    { id: 2, title: 'Buy Groceries', isFavourite: true },
  ];

  private tasksSubject = new BehaviorSubject<Todotask[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable(); // observable for live task updates

  constructor() {}

  getTasks(): Todotask[] {
    return this.tasks;
  }

  getTaskById(id: number): Todotask | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(title: string): void {
    const newTask: Todotask = {
      id: this.tasks.length + 1,
      title,
      isFavourite: false,
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);  // 🔄 Notify subscribers
  }

  toggleFavourite(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      task.isFavourite = !task.isFavourite;
      this.tasksSubject.next(this.tasks);  // 🔄 Notify update
    }
  }

  updateTask(id: number, newTitle: string): void {
    const task = this.getTaskById(id);
    if (task) {
      task.title = newTitle;
      this.tasksSubject.next(this.tasks);  // Notify title change
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);  // Notify deletion
  }

  getFavouriteTasks(): Todotask[] {
    return this.tasks.filter(task => task.isFavourite);
  }
}
