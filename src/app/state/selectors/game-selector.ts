import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {GameState} from '../initial-state/game-initial.state';
import {withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class GameSelector {
  constructor(private _store: Store<GameState>) {}

  getState(): Observable<GameState> {
    return this._store.select((state: GameState) => state)
      .pipe(withLatestFrom((state: GameState) => state['0']));
  }
}
