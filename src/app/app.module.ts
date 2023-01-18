import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDeleteTestingComponent } from './to-delete-testing/to-delete-testing.component';
import { WordInputComponent } from './component/word-input/word-input.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // should this be imported here?
import { BoardComponent } from './component/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { SharedModule } from './shared/shared/shared.module';
import { MultipleChoiceComponent } from './component/multiple-choice/multiple-choice.component';
import { ShellComponent } from './shared/shell/shell.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutComponent } from './component/about/about.component';
import { WordListComponent } from './component/word/word-list/word-list.component';
import { WordListElComponent } from './component/word/word-list-el/word-list-el.component';
import { WordComponent } from './component/word/word/word.component';

// set up back end
import { HttpClientModule } from '@angular/common/http';

// TODO i NEED to clean this up

@NgModule({
  declarations: [
    AppComponent,
    ToDeleteTestingComponent, // clean this up later...
    WordInputComponent,
    BoardComponent,
    MultipleChoiceComponent,
    ShellComponent,
    HomePageComponent,
    AboutComponent,
    WordListComponent,
    WordListElComponent,
    WordComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
