import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IncrementChicagoBulls} from './scoreboard.actions';
import { ScoreState } from './scoreboard.reducer';

@Component({
  selector: 'ngrx-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public score$: Observable<ScoreState>;

  constructor(private store: Store<{score: ScoreState}>) {
    this.score$ = store.pipe(select('game'));
  }

  ngOnInit() {
  }

  public incrementChicagoBulls(): void {
    this.store.dispatch(new IncrementChicagoBulls());
  }
}
