import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer} from './scoreboard.reducer';

@NgModule({
  imports: [StoreModule.forFeature('game', scoreboardReducer)],
})
export class ScoreboardModule {}
