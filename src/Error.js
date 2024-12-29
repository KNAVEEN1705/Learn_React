import { useRouteError } from "react-router-dom";

const Error=()=>
{
    const err=useRouteError()
    return(
        <div>
            <h1>Error</h1>
            <p>Something went wrong or the page doesn't exist.</p>
            <h2>
                {err.status} {err.statusText}
            </h2>
        </div>
    )
}
export default Error;