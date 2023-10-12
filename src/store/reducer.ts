import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { generalSlice, generalState } from './general'
import { pokemonService } from './services/pokemonService'

export const DevToolsMode = process.env.NODE_ENV !== 'production'

const combinedReducer = combineReducers({
  general: generalSlice.reducer,
  [pokemonService.reducerPath]: pokemonService.reducer,
})

const initialState = {
  general: generalState,
}

export const store = configureStore({
  reducer: combinedReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: true }).concat([
      pokemonService.middleware,
    ]),
  devTools: DevToolsMode,
})
