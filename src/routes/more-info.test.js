import React from 'react'
import { render } from '@testing-library/react'
import { RouterProvider } from "react-router-dom"

import { router } from '../App'
import MoreInfo from './more-info'

it('renders', () => {
  render(
    <RouterProvider router={router}>
        <MoreInfo />
    </RouterProvider>
  )
})
