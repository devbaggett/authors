import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import after setup
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: 'dashboard',component: DashboardComponent },
	{ path: 'add_author',component: AddAuthorComponent },
	{ path: 'edit_author/:id',component: EditAuthorComponent },
	// use a colon and parameter name to include a parameter in the url
	// { path: 'gamma/:id', component: GammaComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
