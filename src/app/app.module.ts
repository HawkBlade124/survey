import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsesComponent } from './responses/responses.component';
import { SurveysComponent } from './surveys/surveys.component';
import { HeadersComponent } from './headers/headers.component';
import { ResponseListComponent } from './responses/response-list/response-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseViewComponent } from './responses/response-view/response-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ResponseEditComponent } from './responses/response-edit/response-edit.component';
import { ResponseDetailComponent } from './responses/response-detail/response-detail.component';
import { ResponseItemComponent } from './responses/response-item/response-item.component';

const appRoutes: Routes =[
  {path: '', component: SurveysComponent},
  {path: 'surveys', component: SurveysComponent},
  {path: 'responses', component: ResponsesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ResponsesComponent,
    SurveysComponent,
    HeadersComponent,
    ResponseListComponent,
    ResponseViewComponent,
    ResponseEditComponent,
    ResponseDetailComponent,
    ResponseItemComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
