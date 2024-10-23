import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-home',
  templateUrl: './jobs-home.component.html',
  styleUrl: './jobs-home.component.scss'
})
export class JobsHomeComponent {
  data: any
  constructor(private _job: JobsService){
    _job.getJobs('vacancy/v2/search?page=').subscribe(fetched => {
      this.data = fetched
    })
  }
}
