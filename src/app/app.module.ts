import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { ScoreboardModule } from './components/scoreboard/scoreboard.module';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

import { counterReducer } from './counter.reducer';
// import { scoreboardReducer } from './components/scoreboard/scoreboard.reducer';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
    ScoreboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
