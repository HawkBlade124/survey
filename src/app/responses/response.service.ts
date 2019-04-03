import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from './response.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  responseListChangedEvent = new Subject<Response[]>();
  maxResponseId: number;
  responses: Response[] = []
  id: string;

  constructor(private http: HttpClient ) { }

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
     .subscribe(
       (responseData) => {
         this.responses = responseData.responses;
         this.responses.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
         this.responseListChangedEvent.next(this.responses.slice());
       }
     )

   }
}
