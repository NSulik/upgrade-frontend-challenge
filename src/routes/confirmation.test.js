import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"

import Confirmation from './confirmation'

it('renders w/ undefined state', () => {
  render(<Confirmation />,  { wrapper: BrowserRouter })
})
