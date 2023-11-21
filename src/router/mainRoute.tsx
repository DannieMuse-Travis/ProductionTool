import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/auth/SignIn"
import PrivateRoute from "./PrivateRouter"

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute>
            <LayOut/>
        </PrivateRoute>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            },
            {
              index:true,
              path:"/dark",
              element:<HomeScreen/>,
            }
        ]
    },
    {
        path:"/singIn",
        element:<SignIn/>
    }
])