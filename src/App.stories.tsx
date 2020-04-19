import React from 'react'
import { App } from './App'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'App',
  component: App,
}

export const Default = () => <App />

Default.story = {
  name: 'default',
}
