import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrl: './jobs-search.component.scss'
})
export class JobsSearchComponent {
  data: any
  pageQuery: string = ''
  idQuery: string = ''
  keywordQuery: string = ''
  regionQuery: string = ''
  minPriceQuery: string = ''
  maxPriceQuery: string = ''
  typeQuery: string = ''
  constructor(private route: ActivatedRoute, private _job: JobsService){
    this.route.queryParams.subscribe(queryData => {
      this.pageQuery = queryData['page'] || ''
      this.idQuery = queryData['id']
      this.keywordQuery = queryData['searchKeyword'] || ''
      this.regionQuery = queryData['region'] || ''
      this.minPriceQuery = queryData['minPrice'] || ''
      this.maxPriceQuery = queryData['maxPrice'] || ''
      this.typeQuery = queryData['type'] || ''
    })
    _job.getSearchJobs(`page=${this.pageQuery}&id=${this.idQuery}&searchKeyword=${this.keywordQuery}&region=${this.regionQuery}&minPrice=${this.minPriceQuery}&maxPrice=${this.maxPriceQuery}&type=${this.typeQuery}`).subscribe(data => {
      this.data = data
    })
    console.log(this.data)
  }

}
