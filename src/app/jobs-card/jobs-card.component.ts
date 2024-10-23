import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrl: './jobs-card.component.scss'
})
export class JobsCardComponent {
  @Input() jobData: any;
}
