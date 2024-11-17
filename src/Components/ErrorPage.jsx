import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const err = useRouteError();
    return(
        <section id="error">
            {err.message}
        </section>
    )
}