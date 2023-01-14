import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

import Success from './success'

it('renders', () => {
  render(<Success />,  { wrapper: BrowserRouter })
})
