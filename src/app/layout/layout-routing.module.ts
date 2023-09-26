import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PageListComponent } from '../pages/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
      path:'blog',
      loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
