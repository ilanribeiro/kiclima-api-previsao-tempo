import { Injectable } from "@angular/core";

import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import * as fromHomeActions from './home.actions';

@Injectable()
export class HomeEffects {

  test$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.changeText),
      map(({ text }) => console.log(text)),
    ),
    { dispatch: false } // Quando o effect não dispara nenhuma action
  )

  constructor(private actions$: Actions) {

  }
}