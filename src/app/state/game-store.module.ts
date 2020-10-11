import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';
import {gameReducer} from './reducers/game.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GameEffects} from './effects/game.effects';
import {GameSelector} from './selectors/game-selector';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot([
      gameReducer,
    ]),
    EffectsModule.forRoot([
      GameEffects
    ])
  ],
  providers: [GameSelector]
})
export class GameStoreModule { }
