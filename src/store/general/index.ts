import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { featureKey } from '../featureKey'
import { PocketData } from './types'

type GeneralState = {
  pocket: PocketData[]
}

export const generalState: GeneralState = {
  pocket: [],
}

export const generalSlice = createSlice({
  name: featureKey.GENERAL,
  initialState: generalState,
  reducers: {
    setPocket: (
      state: Pick<GeneralState, 'pocket'>,
      { payload }: PayloadAction<GeneralState['pocket']>
    ) => {
      state.pocket = payload
    },
  },
})

export const generalActions = {
  ...generalSlice.actions,
}
