import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrl: './jobs-category.component.scss'
})
export class JobsCategoryComponent {
  data: any
  constructor(private _category: JobsService){
    _category.getJobs('categories').subscribe(fetched => {
      this.data = fetched
    })
  }
  getConsole = () => console.log(this.data)
}
