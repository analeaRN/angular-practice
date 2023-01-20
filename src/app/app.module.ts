import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // should this be imported here?
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared/shared.module';
import { ShellComponent } from './shared/shell/shell.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutComponent } from './component/about/about.component';
import { WordListComponent } from './component/word/word-list/word-list.component';
import { WordListElComponent } from './component/word/word-list-el/word-list-el.component';
import { WordComponent } from './component/word/word/word.component';

// set up back end
import { HttpClientModule } from '@angular/common/http';
import { StatCardComponent } from './component/stat-card/stat-card.component';
import { DragNDropComponent } from './component/review/drag-n-drop/drag-n-drop.component';
import { TypedInputComponent } from './component/review/typed-input/typed-input.component';
import { ReviewComponent } from './component/review/review.component';
import { ReviewFormComponent } from './component/review/review-form/review-form.component';
import { ResultsComponent } from './component/review/results/results.component';
// import { ReviewComponent } from './component/review/review/review.component';

// TODO i NEED to clean this up

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomePageComponent,
    AboutComponent,
    WordListComponent,
    WordListElComponent,
    WordComponent,
    StatCardComponent,
    DragNDropComponent,
    TypedInputComponent,
    ReviewComponent,
    ReviewFormComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    HttpClientModule,

    // sets up mock api
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
