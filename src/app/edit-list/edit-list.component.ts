import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ import this
import { TaskService } from '../task.service';
import { Todotask } from '../task.model'; // ✅ correct


@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // ✅ include FormsModule here
  ],
  templateUrl: './edit-list.component.html',
})
export class EditListComponent implements OnInit {
  taskId!: number;
  task?: Todotask;
  updatedTitle = '';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(this.taskId);
    if (this.task) {
      this.updatedTitle = this.task.title;
    }
  }

  updateTodotask() {
    this.taskService.updateTask(this.taskId, this.updatedTitle);
    this.router.navigate(['/list']);
  }
}
