import {GameState} from '../initial-state/game-initial.state';
import {MakeChoiceAction} from '../actions/game.actions';

export function makeChoice(
  state: GameState,
  action: MakeChoiceAction
): GameState {
  return {
    ...state,
    playerChoice: action.choice
  };
}
