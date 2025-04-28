import { NavLink, useRouteError } from "react-router-dom";
import "../ErrorPage/ErrorPage.css"

export const ErrorPage = () =>{
    const error = useRouteError();
    return (
        <div className="container cont-error">
            <h1>Oops! An error occurred.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to= "/"> <button className="GoToHome">Go back to home</button> </NavLink>

        </div>
    )
}