import { Injectable } from '@angular/core';

// import after setup
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  	constructor(
  		private _http: HttpClient) {
  	}

  	getAuthors(){
		return this._http.get('/authors');
	}
  	addAuthor(author){
		return this._http.post('/add', author);
	}
	editAuthor(id, updatedAuthor){
		return this._http.put('/edit/' + id, updatedAuthor);
	}
	getAuthor(id){
		return this._http.get('/retrieve/' + id);
	}
	deleteAuthor(id){
		return this._http.delete('/delete/' + id);
	}
	
}