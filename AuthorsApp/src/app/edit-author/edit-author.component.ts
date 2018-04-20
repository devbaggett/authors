import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
	 editAuthor = {};	 

 	constructor(
	    private _route: ActivatedRoute,
	    private _router: Router,
	    private _httpService: HttpService) { }

  	ngOnInit() {
  		this._route.params.subscribe((params: Params) => {
  			let observable = this._httpService.getAuthor(params['id']);
  			observable.subscribe(data => {
  				console.log("Author ready for edit!", data['author'][0]);
  				this.editAuthor = data['author'][0];
  			})
  		})
  	}
  	
  	editAuthorFromId(id){
  		if (id){
  			let Observable = this._httpService.editAuthor(id, this.editAuthor);
  			Observable.subscribe(data => {
  				console.log("Author successfully edited!", data['author']);
  			})
  		}
  	}
}
