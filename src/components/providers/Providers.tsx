'use client'

import { store } from '@/store/reducer'
import React from 'react'
import { Provider } from 'react-redux'

const Providers = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}

export default Providers
