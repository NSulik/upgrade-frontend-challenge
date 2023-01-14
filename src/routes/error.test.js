import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

import Error from './error'

it('renders w/o error message', () => {
  render(<Error />,  { wrapper: BrowserRouter })
})

