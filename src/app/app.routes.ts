import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { EditListComponent } from './edit-list/edit-list.component';

export const routes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'favourites', component: FavouriteListComponent },
  { path: 'edit/:id', component: EditListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
