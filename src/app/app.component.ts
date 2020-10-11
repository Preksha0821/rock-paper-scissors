import {Component} from '@angular/core';
import {GameChoices} from './models/match';
import {gameText} from '../assets/json/game.json';
import {Store} from '@ngrx/store';
import {InitGameAction, PlayGameAction} from './state/actions/game.actions';
import {GameState} from './state/initial-state/game-initial.state';
import {GameSelector} from './state/selectors/game-selector';
import {Observable} from 'rxjs';
import {Button, ButtonType} from './models/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * returns game state
   */
  game$: Observable<GameState>;
  /**
   * displays player's choice win | lose | tie
   */
  playerChoice: GameChoices;
  /**
   * displays the static text for the game
   */
  gameText = gameText;
  /**
   * used to show and hide pick one game option text
   */
  displayPickOneText = false;
  /**
   * used to show and hide results
   */
  displayResult: boolean;
  buttons: Button[] = [
    {
      id: GameChoices.Rock,
      label: 'Rock',
      imagePath: '../assets/Rock-50.png',
      buttonType: ButtonType.Secondary
    },
    {
      id: GameChoices.Paper,
      label: 'Paper',
      imagePath: '../assets/Paper-50.png',
      buttonType: ButtonType.Secondary
    },
    {
      id: GameChoices.Scissors,
      label: 'Scissors',
      imagePath: '../assets/Scissors-50.png',
      buttonType: ButtonType.Secondary
    },
  ];

  constructor(
    private _store: Store<GameState>,
    private _selector: GameSelector
  ) {
    this.game$ = this._selector.getState();
    this._store.dispatch(new InitGameAction());
  }

  onSelection(choice: GameChoices): void {
    this.displayPickOneText = false;
    this.buttons.forEach(button =>
      button.id === choice
        ? button.buttonType = ButtonType.Primary
        : button.buttonType = ButtonType.Secondary);
    this.playerChoice = choice;
  }

  onPlay(): void {
    if (!this.playerChoice) {
      this.displayPickOneText = true;
      return;
    }
    this._store.dispatch(new PlayGameAction(this.playerChoice));
    this.displayPickOneText = false;
    this.playerChoice = null;
    this.buttons.forEach(button => button.buttonType = ButtonType.Secondary);
    this.displayResult = true;
  }
}
