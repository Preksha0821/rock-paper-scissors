import {Action} from '@ngrx/store';
import {GameChoices, MatchResponse} from '../../models/match';

export enum GameActionsEnum {
  INIT_GAME = '[GAME]INIT GAME',
  MAKE_CHOICE = '[GAME]MAKE CHOICE',
  PLAY_GAME = '[GAME]PLAY GAME',
  PLAY_GAME_API_SUCCESS = '[GAME]PLAY GAME SUCCESS',
  PLAY_GAME_API_FAILURE = '[GAME]PLAY GAME FAILURE'
}

export class InitGameAction implements Action {
  readonly type: string = GameActionsEnum.INIT_GAME;
}

export class MakeChoiceAction implements Action {
  readonly type: string = GameActionsEnum.MAKE_CHOICE;
  constructor(public choice: GameChoices) {
  }
}

export class PlayGameAction implements  Action {
  readonly type: string = GameActionsEnum.PLAY_GAME;
  constructor(public choice: GameChoices) {
  }
}

export class PlayGameApiSuccessAction implements  Action {
  readonly type: string = GameActionsEnum.PLAY_GAME_API_SUCCESS;
  constructor(public matchGameResponse: MatchResponse) {
  }
}
export class PlayGameApiFailureAction implements  Action {
  readonly type: string = GameActionsEnum.PLAY_GAME_API_FAILURE;
  constructor(public code: string, public details?: any) {
  }
}

export type GameActions =
  | InitGameAction
  | MakeChoiceAction
  | PlayGameAction
  | PlayGameApiSuccessAction
  | PlayGameApiFailureAction;
