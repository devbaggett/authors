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
  	// tasks = [];
   //  task = {};
   
   //  edit = false;
   //  editTask: any;
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
  	// getTasksFromService(){
   //  	let observable = this._httpService.getTasks();
   //  	observable.subscribe(data => {
   //  		console.log("Got our tasks!", data);
   //  		this.tasks = data['tasks'];
   //  		console.log(this.tasks);
   //  	});
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
   //  editTaskFromService(id){
   //    let observable = this._httpService.updateTask(id, this.editTask);
   //    observable.subscribe(data => {
   //      console.log('Task edited!', data);
   //    })
   //    this.edit = false;
   //    this.getTasksFromService();
   //  }
   //  deleteTaskFromService(id){
   //    let observable = this._httpService.deleteTask(id);
   //    observable.subscribe(data => {
   //      console.log("Deleted task!", data);
   //    })
   //    this.getTasksFromService();
   //  }
  	// getTaskById(id){
  	// 	if (id){
  	// 		let tempObservable = this._httpService.getTask(id);
  	// 		tempObservable.subscribe(data => {
  	// 			console.log("Task ready for edit!", data['task'][0]);
   //        this.edit = true;
   //        this.task = data['task'][0];
   //        this.editTask = { id: this.task['_id'], title: this.task['title'], description: this.task['description'] };
  	// 		})
  	// 	}
  	// }
