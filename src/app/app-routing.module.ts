import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks/bookmarks.page';
import { DetailsPage } from './pages/details/containers/details/details.page';
import { HomePage } from './pages/home/containers/home/home.page';


const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'bookmarks', component: BookmarksPage },
  { path: 'details', component: DetailsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
