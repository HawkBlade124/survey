import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from './response.model';
@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  responseSelectedEvent = new EventEmitter<Response>();
  responseListChangedEvent = new Subject<Response[]>();
  private responsesUpdated = new Subject<Response[]>();
  maxResponseId: number;
  responses: Response[] = [];
  id: string;

  constructor(private http: HttpClient ) {
    this.maxResponseId = this.getMaxId();
  }

  getMaxId(): number{
    var maxId = 0;
     for(let response of this.responses){
      var currentId = response.id;
       if(+currentId > maxId){
        +maxId;
       }
     }
     return maxId;
   }

   getResponses(){
     this.http.get<{message: string, responses: Response[]}> ('http://localhost:3000/responses')
     .pipe()
     .subscribe(
       (responseData) => {
         this.responses = responseData.responses;
         this.responses.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
         this.responseListChangedEvent.next(this.responses.slice());
       }
     )
   }

   getResponse(index: string) {
    return this.responses[index];
  }

  deleteResponse(response: Response) {
    if (!response){
      return;
    }

    this.http.delete('http://localhost:3000/responses/' + response.id)
      .subscribe(
        (responses: Response[]) => {
          this.responses = responses;
          this.responseListChangedEvent.next(this.responses.slice());
        })
  }

  updateResponse(originalResponse: Response, newResponse: Response) {
    if (!originalResponse || !newResponse){
      return;
    }

    const pos = this.responses.indexOf(originalResponse);
    if (pos < 0){
      return;
    }

    const headers = new HttpHeaders({'Content-Type':'application/json'});
      newResponse.id = originalResponse.id;

    this.http.put('http://localhost:3000/responses' + originalResponse.id, newResponse,  {headers: headers})
     .subscribe(
        (response: Response) => {
          this.responses[pos] = newResponse;
          this.responseListChangedEvent.next(this.responses.slice());
        })
  }

  addResponse(response: Response) {
    if(!document){
      return;
    }

    response.id = '';
    const headers = new HttpHeaders({'Content-Type':'text/plain; charset=utf-8'});

    this.http.post<{message: string, responses: Response}>('https://localhost:3000/responses', response,  {headers: headers}).subscribe(
      (responseData) => {
        this.responses.push(responseData.responses);
        this.responseListChangedEvent.next(this.responses.slice());
      }
    );
  }
}
