import {GameState, InitialGameState} from '../initial-state/game-initial.state';
import {InitGameAction} from '../actions/game.actions';

export function initGame(
  state: GameState,
  action: InitGameAction
): GameState {
  return {
    ...InitialGameState
  };
}
