import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutComponent } from './component/about/about.component';
import { WordListComponent } from './component/word/word-list/word-list.component';
import { WordComponent } from './component/word/word/word.component';

const routes: Routes = [
  { path: 'word/:id', component: WordComponent},
  { path: 'view-words', component: WordListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
