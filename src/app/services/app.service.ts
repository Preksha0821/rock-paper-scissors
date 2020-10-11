import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MatchResponse} from '../models/match';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {PlayGameApiFailureAction} from '../state/actions/game.actions';

@Injectable()
export class AppService {
  constructor(private _http: HttpClient) {
  }
  onMatch(choice: string): Observable<MatchResponse> {
    const payload = {choice: choice};
    return this._http.post<MatchResponse>(environment.backend + environment.uri.match, payload)
      .pipe(
        tap(() => console.log()),
        catchError((error) =>
        throwError(
          new PlayGameApiFailureAction(error.status, error)
        ))
    );
  }
}
