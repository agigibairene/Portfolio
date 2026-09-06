import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import errorImg from "../assets/error-404.lottie";

export default function ErrorPage(){
    const {status, statusText} = useRouteError();

    return(
        <section id="error-page">
            <div className="content">
                <div className="err-image">
                    <DotLottieReact
                        src={errorImg}
                        loop
                        autoplay
                        className='error-image'
                    />
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