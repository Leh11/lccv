import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BensComponent } from './bens.component';

const routes: Routes = [
  { path: 'bens', component: BensComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BensRoutingModule { }
