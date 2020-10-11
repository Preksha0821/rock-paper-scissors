import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GameActionsEnum, PlayGameAction, PlayGameApiFailureAction, PlayGameApiSuccessAction} from '../actions/game.actions';
import {catchError, map, switchMap, take} from 'rxjs/operators';
import {AppService} from '../../services/app.service';
import {of} from 'rxjs';
import {MatchResponse} from '../../models/match';
import {ApiError} from '../../models/api-error';

@Injectable()
export class GameEffects {
  @Effect({dispatch: true})
   playGame$ = this._actions$.pipe(
     ofType(GameActionsEnum.PLAY_GAME),
     switchMap((action: PlayGameAction) =>
      this._appService.onMatch(action.choice)
        .pipe(
          take(1),
          map((response: MatchResponse) => new PlayGameApiSuccessAction(response)),
          catchError((error: ApiError) => of(new PlayGameApiFailureAction(error.code, error.details)))
        )
     )
   );

  constructor(
    private _actions$: Actions,
    private _appService: AppService
  ) {}
}
