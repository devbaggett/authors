import { Component, OnInit } from '@angular/core';

// import after setup
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	title = 'Authors';
  	
   //  task = {};
   
   
  	constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router){}
  	ngOnInit(){
      // this._route.params.subscribe((params: Params) => console.log(params['id']));
    }

}
      	// this.getTasksFromService();
        // this.newTask = { title: "", description: "" };
   //  }
  	
   //  getOneTask(id){
   //     let observable = this._httpService.getTasks();
   //     observable.subscribe(data => {
   //       console.log("Got our task!", data);
   //        id -= 1;
   //        this.task = data['tasks'][id];
   //        console.log(this.task);
   //     })
   //  }
   //  
    
    
  	
