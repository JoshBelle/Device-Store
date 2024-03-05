import { Navigate } from "react-router-dom"
import { MAIN_ROUTE } from "../constant"

const RedirectRoutes = () => {
  return (
    <div>
      <Navigate to={MAIN_ROUTE}/>
    </div>
  )
}

export default RedirectRoutes
