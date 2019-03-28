import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {
  @Input() response: Response;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
