import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CityWeather } from 'src/app/shared/models/weather.model';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';


@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchControl: FormControl;

  text: string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);

    this.store.pipe(
      select(fromHomeSelectors.selectCurrentWeather),
      takeUntil(this.componentDestroyed$),
    ).subscribe(value => this.cityWeather = value);

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selecCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selecCurrentWeatherError));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

  
}
