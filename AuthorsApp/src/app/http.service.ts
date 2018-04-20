import { Injectable } from '@angular/core';

// import after setup
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  	constructor(private _http: HttpClient) {
	  	// this.getTasks();
		// this.getTask();
  	}
  	addAuthor(author){
  		// console.log("author is", author);
		return this._http.post('/add', author);
	}
}
//   getTasks(){
// 		// let tempObservable = this._http.get('/tasks');
// 		// tempObservable.subscribe(data => console.log('Got our tasks!', data));
// 		return this._http.get('tasks');
// 	}
// 	getTask(id){
// 		return this._http.get('/retrieve/' + id);
// 	}
	
// 	updateTask(id, updatedTask){
// 		return this._http.put('/update/' + id, updatedTask);
// 	}
// 	deleteTask(id){
// 		return this._http.delete('/delete/' + id);
// 	}
// }
