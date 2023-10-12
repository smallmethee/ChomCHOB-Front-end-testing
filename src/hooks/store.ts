import { bindActionCreators } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import actionCreators from '../store/actionCreators'
import { AppDispatch, RootState } from '../store/configureStore'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(actionCreators, dispatch)
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
