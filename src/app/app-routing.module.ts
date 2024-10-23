import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { JobsSearchComponent } from './jobs-search/jobs-search.component';
import { JobsVipComponent } from './routes/jobs-vip/jobs-vip.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';

const routes: Routes = [
  {
    path: "",
    component: JobsHomeComponent
  },
  {
    path: "search",
    component: JobsSearchComponent
  },
  {
    path: "vip",
    component: JobsVipComponent
  },
  {
    path: 'details/:id',
    component: JobsDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
