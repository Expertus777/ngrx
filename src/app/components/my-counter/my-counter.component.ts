import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select} from '@ngrx/store';
import { Increment, Decrement, Reset } from '../../counter.action';

@Component({
  selector: 'ngrx-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
