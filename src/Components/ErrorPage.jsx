import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

import errorImage from "/error.gif";

export default function ErrorPage(){
    const {status, statusText} = useRouteError();

    return(
        <section id="error-page">
            <div className="content">
                <div className="err-image">
                    <img src={errorImage} alt="" />
                </div>

                <div className="center-err">
                    <h2 className="err-h2">Oops!!!</h2>
                    <p className="error-text">Page {statusText} {status}</p>
                    <Link to="/">
                        <button className="error-btn">Go to Home</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}