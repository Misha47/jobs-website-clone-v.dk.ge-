import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-component-search',
  templateUrl: './jobs-component-search.component.html',
  styleUrl: './jobs-component-search.component.scss'
})
export class JobsComponentSearchComponent {
    regionData: any
    regionQuery: string = ''
    keywordQuery: string = ''
    minPriceQuery: string = ''
    maxPriceQuery: string = ''
    constructor(private _region: JobsService){
      _region.getRegionsData().subscribe(data => this.regionData = data)
    }
    selectedOptionQuery(e: any){
      this.regionQuery = e.target.value
      console.log(this.regionQuery)
    }
}
