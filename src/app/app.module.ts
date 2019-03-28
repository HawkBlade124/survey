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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
