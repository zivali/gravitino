/*
 * Copyright 2023 Datastrato.
 * This software is licensed under the Apache License version 2.
 */

'use client'

import StoreProvider from './store'
import EmotionProvider from './emotion'
import ThemeProvider from './theme'

const Provider = ({ children }) => {
  return (
    <StoreProvider>
      <EmotionProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </EmotionProvider>
    </StoreProvider>
  )
}

export default Provider