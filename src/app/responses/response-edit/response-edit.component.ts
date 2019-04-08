import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResponseService } from '../response.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '../response.model'
@Component({
  selector: 'app-response-edit',
  templateUrl: './response-edit.component.html',
  styleUrls: ['./response-edit.component.css']
})
export class ResponseEditComponent implements OnInit {
  @ViewChild('form') rlForm: NgForm;
  id: string;
  originalResponse: Response;
  response: Response;
  editMode = false;
  addResponse: ResponseService;
  editedResponse: Response;

  constructor(private responseService: ResponseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        // this.editMode = params['id'] != null;
        if (!this.id){
          this.editMode = false;
          return;
        }

        this.originalResponse = this.responseService.getResponse(this.id);

        if(!this.originalResponse){
         return;
        }

        this.editMode = true;

        this.response = JSON.parse(JSON.stringify(this.originalResponse));
});
  }

}
