import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-mytodolist',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './mytodolist.component.html',
  styleUrls: ['./mytodolist.component.scss'],
})
export class MytodolistComponent {
  task: string = '';
  tasks: string[] = [];

  onSubmit() {
    if (this.task.trim()) {
      this.tasks.push(this.task.trim());
      this.task = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
