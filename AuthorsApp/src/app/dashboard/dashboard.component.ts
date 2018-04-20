import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	authors = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

	ngOnInit() {
		this.getAuthorsFromService();
	}

	getAuthorsFromService(){
    	let observable = this._httpService.getAuthors();
    	observable.subscribe(data => {
    		console.log("Got our authors!", data);
    		this.authors = data['authors'];
    	});
    }
    deleteAuthorFromService(id){
      let observable = this._httpService.deleteAuthor(id);
      observable.subscribe(data => {
        console.log("Deleted author!", data);
      })
    }
}
