import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-vip',
  templateUrl: './jobs-vip.component.html',
  styleUrl: './jobs-vip.component.scss'
})
export class JobsVipComponent {
  data: any
  constructor(private _job: JobsService){
    this._job.getJobs('vacancy/v2/search?type=vip').subscribe(fetched => {
      this.data = fetched
    })
  }

  getData(){
    console.log(this.data)
  }

}
