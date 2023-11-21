import {Outlet} from "react-router-dom"
import Header from "../static/Header"

const LayOut = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
    </div>
  )
}

export default LayOut