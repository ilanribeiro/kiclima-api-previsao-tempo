import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer";

export const selectHomeState = createFeatureSelector('home');

export const selecCurrentWeather = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.entity,
);

export const selecCurrentWeatherLoading = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.loading,
);

export const selecCurrentWeatherError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error,
);

