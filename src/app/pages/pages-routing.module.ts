import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: PageListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
