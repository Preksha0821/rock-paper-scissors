export enum GameChoices {
  Rock= 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors'
}

export enum Result {
  Win= 'win',
  Lose= 'lose',
  Tie= 'tie'
}

export interface MatchResponse {
  computerChoice: GameChoices;
  playerChoice: GameChoices;
  result: Result;
}
