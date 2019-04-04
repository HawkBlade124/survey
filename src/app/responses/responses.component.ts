import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from './response.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseService } from './response.service';
@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css'],
  providers:[]
})
export class ResponsesComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  responses:Response[]=[];

  constructor(private responseService: ResponseService,
    private router: Router,
    private route: ActivatedRoute) { }

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
