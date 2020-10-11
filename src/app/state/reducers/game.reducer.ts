import {GameActionsEnum, GameActions} from '../actions/game.actions';
import {GameState} from '../initial-state/game-initial.state';
import {makeChoice} from './make-choice.reducer';
import {playGameSuccess} from './play-game-success.reducer';
import {initGame} from './init-game.reducer';
import {apiFailure} from './api-failure';

export interface ReducerFunctions {
  [actionType: string]: (
    state: GameState,
    action: GameActions
  ) => GameState;
}


const reducerFunctions: ReducerFunctions = {
  [GameActionsEnum.INIT_GAME]: initGame,
  [GameActionsEnum.MAKE_CHOICE]: makeChoice,
  [GameActionsEnum.PLAY_GAME_API_SUCCESS]: playGameSuccess,
  [GameActionsEnum.PLAY_GAME_API_FAILURE]: apiFailure
};


export function gameReducer(
  state: GameState,
  action: GameActions
): GameState {
  if (action.type in reducerFunctions) {
    return reducerFunctions[action.type](state, action);
  } else {
    return {
      ...state
    };
  }
}
