import { MovieComponent } from './movie/movie.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'movies',pathMatch:'full'},
  { path:'movies', component: HomeComponent },
  { path:'movies/:id', component: MovieComponent },
  { path:'test', component: TestComponent },
  { path:'employee-detail', component: EmployeeDetailComponent },
  { path:'employee-list', component: EmployeeListComponent },
  { path:'about',component: AboutComponent },
  { path:'contacts',component: ContactsComponent },
  { path:'gallery',component: GalleryComponent },
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
