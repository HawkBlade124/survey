import { Component, OnInit } from '@angular/core';
import { Response } from '../response.model';
import { ResponseService } from '../response.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css']
})
export class ResponseDetailComponent implements OnInit {
  response: Response;
  id: string;

  constructor(private responseService: ResponseService,
              private route: ActivatedRoute,
              private router: Router){ }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.response = this.responseService.getResponse(this.id);
      }
    );
  }

  onEditResponse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDelete(){
    this.responseService.deleteResponse(this.response);
  }

}
