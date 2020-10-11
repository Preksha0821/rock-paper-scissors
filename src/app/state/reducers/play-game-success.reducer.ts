import {GameState} from '../initial-state/game-initial.state';
import {PlayGameApiSuccessAction} from '../actions/game.actions';
import {Result} from '../../models/match';

export function playGameSuccess(
  state: GameState,
  action: PlayGameApiSuccessAction
): GameState {

  const newState = {
    ...state,
    playerChoice: action.matchGameResponse.playerChoice,
    computerChoice: action.matchGameResponse.computerChoice,
    result: action.matchGameResponse.result,
    apiFailure: false
  };

  newState.playerScore = newState.result === Result.Win ? state.playerScore + 1 : state.playerScore;
  newState.computerScore = newState.result === Result.Lose ? state.computerScore + 1 : state.computerScore;
  return newState;
}
