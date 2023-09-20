import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StopsInfoComponent } from './components/stops-info/stops-info.component';
import { SelectStopsFormComponent } from './components/select-stops-form/select-stops-form.component';

const routes: Routes = [
  { path: '', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'select', component: SelectStopsFormComponent },
  { path: 'info', component: StopsInfoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
