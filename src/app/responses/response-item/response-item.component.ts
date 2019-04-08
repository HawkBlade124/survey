import { Component, OnInit, Input } from '@angular/core';
import { Response } from "../response.model";

@Component({
  selector: 'app-response-item',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.css']
})
export class ResponseItemComponent implements OnInit {
  @Input() response: Response;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
