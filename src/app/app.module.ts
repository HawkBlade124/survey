import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsesComponent } from './responses/responses.component';
import { SurveysComponent } from './surveys/surveys.component';
import { HeadersComponent } from './headers/headers.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
