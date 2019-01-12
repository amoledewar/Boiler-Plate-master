import { ReceiverComponent } from './receiver/receiver.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { DetailComponent } from './detail/detail.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'item/:id', component: DetailComponent },
  { path: 'item', component: ItemsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'receiver', component: ReceiverComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }