import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsNavComponent } from './jobs-nav/jobs-nav.component';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { JobsCardComponent } from './jobs-card/jobs-card.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobsVipComponent } from './routes/jobs-vip/jobs-vip.component';
import { JobsCategoryComponent } from './jobs-category/jobs-category.component';
import { JobsFooterComponent } from './jobs-footer/jobs-footer.component';
import { JobsSearchComponent } from './jobs-search/jobs-search.component';
import { JobsComponentSearchComponent } from './jobs-component-search/jobs-component-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobsNavComponent,
    JobsHomeComponent,
    JobsCardComponent,
    JobsDetailsComponent,
    JobsVipComponent,
    JobsCategoryComponent,
    JobsFooterComponent,
    JobsSearchComponent,
    JobsComponentSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
