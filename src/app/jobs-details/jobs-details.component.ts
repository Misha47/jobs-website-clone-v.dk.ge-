import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.scss'
})
export class JobsDetailsComponent {
  job: any;
  descriptionDetails: any
  constructor(private _route: ActivatedRoute, private _jobsService: JobsService) {
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this._jobsService.getById(id).subscribe((data) => {
        this.job = data;
        console.log(data)
      })
    });
  }
}
