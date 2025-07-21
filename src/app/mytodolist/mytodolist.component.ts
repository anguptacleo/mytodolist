import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Todotask } from '../task.model';
// ✅ Import CommonModule

@Component({
  selector: 'app-mytodolist',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './mytodolist.component.html',
  styleUrls: ['./mytodolist.component.scss'],
})
export class MytodolistComponent {
 // mytodolist.component.ts

task: string = '';
tasks: { title: string; isFavourite: boolean }[] = [];

onSubmit() {
  if (this.task.trim()) {
    this.tasks.push({
      title: this.task.trim(),
      isFavourite: false
    });
    this.task = '';
  }
}

toggleFavourite(task: any) {
  task.isFavourite = !task.isFavourite;
}

deleteTask(index: number) {
  this.tasks.splice(index, 1);
}

}
