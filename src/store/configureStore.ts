import { Action, Store, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { store } from './reducer'

export const DevToolsMode = process.env.NODE_ENV !== 'production'

export type ThunkActionType<T = Promise<void>> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ThunkDispatchType = ThunkDispatch<RootState, any, Action<string>>
export type StoreType = Store<RootState, Action<string>> & {
  dispatch: ThunkDispatchType
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
