import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs'
import { ResponseService } from '../response.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '../response.model';
@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  responses: Response[] = [];

  constructor(private responseService: ResponseService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.subscription = this.responseService.responseListChangedEvent.subscribe(
      (responses: Response[]) =>
      this.responses = responses
      );
      this.responseService.getResponses();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
