import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceListComponent } from './components/piece-list/piece-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: PieceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
