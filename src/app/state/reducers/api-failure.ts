import {GameState} from '../initial-state/game-initial.state';
import {PlayGameApiFailureAction} from '../actions/game.actions';

export function apiFailure(
  state: GameState,
  action: PlayGameApiFailureAction
): GameState {
  return {
    ...state,
    apiFailure: true
  };
}
