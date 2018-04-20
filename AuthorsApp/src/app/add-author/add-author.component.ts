import { Component, OnInit } from '@angular/core';

// import after setup
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
	author = {};

	constructor(
	  	private _httpService: HttpService,
	    private _route: ActivatedRoute,
	    private _router: Router){}

	ngOnInit() {
		// this.author = {};
  	}
  	
 	addAuthorFromService(){
 		// this.author.name = name;
		let observable = this._httpService.addAuthor(this.author);
		// console.log(this.author);
		observable.subscribe(data => {
			console.log("Added author!", data);
			
		
			

		})
		// this.getTasksFromService();
		// this.newTask = { title: "", description: ""};
    }

    goHome(){
  		this._router.navigate(['/home']);
  	}

}
