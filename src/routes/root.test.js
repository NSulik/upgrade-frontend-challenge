import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

import Root from './root'

it('renders', () => {
  render(<Root />,  { wrapper: BrowserRouter })
})
