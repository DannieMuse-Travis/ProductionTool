import {RouterProvider} from 'react-router-dom'
import { MainRouter } from './router/mainRoute'

const App = () => {
  return (
    <div>
<RouterProvider router={MainRouter}/>
    </div>
  )
}

export default App