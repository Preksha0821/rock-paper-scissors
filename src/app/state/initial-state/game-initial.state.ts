import {GameChoices, Result} from '../../models/match';

export interface GameState {
  playerScore: number;
  playerChoice: GameChoices;
  computerScore: number;
  computerChoice: GameChoices;
  result: Result;
  apiFailure: boolean;
}

export const InitialGameState: GameState = {
  playerScore: 0,
  playerChoice: null,
  computerScore: 0,
  computerChoice: null,
  result: null,
  apiFailure: false
};
