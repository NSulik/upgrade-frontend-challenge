import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Confirmation from "./routes/confirmation"
import Error from "./routes/error"
import MoreInfo, { colorLoader } from "./routes/more-info"
import Root from "./routes/root"
import Success from "./routes/success"

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
  },
  {
    path:"/more-info",
    element: <MoreInfo />,
    loader: colorLoader
  },
  {
    path:"/confirmation",
    element: <Confirmation />,
  },
  {
    path:"/success",
    element: <Success />,
  },
  {
    path:"/error",
    element: <Error />,
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
