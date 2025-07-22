import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all tasks', () => {
    const tasks = service.getTasks();
    expect(Array.isArray(tasks)).toBeTrue();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should add a task', () => {
    const initialLength = service.getTasks().length;
    service.addTask('New Task');
    const updatedTasks = service.getTasks();
    expect(updatedTasks.length).toBe(initialLength + 1);
    expect(updatedTasks[updatedTasks.length - 1].title).toBe('New Task');
  });

  it('should delete a task', () => {
    const newTaskTitle = 'To Be Deleted';
    service.addTask(newTaskTitle);
    const newTaskId = service.getTasks().slice(-1)[0].id;

    service.deleteTask(newTaskId);
    const task = service.getTaskById(newTaskId);
    expect(task).toBeUndefined();
  });

  it('should toggle favourite status', () => {
    const task = service.getTasks()[0];
    const initialStatus = task.isFavourite;

    service.toggleFavourite(task.id);
    const updatedTask = service.getTaskById(task.id);
    expect(updatedTask?.isFavourite).toBe(!initialStatus);
  });

  it('should update task title', () => {
    const task = service.getTasks()[0];
    service.updateTask(task.id, 'Updated Title');
    const updatedTask = service.getTaskById(task.id);
    expect(updatedTask?.title).toBe('Updated Title');
  });
});
