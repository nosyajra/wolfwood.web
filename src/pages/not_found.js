import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Not Fount - Wolfwood Web</title>
            </Helmet> 

            <div className="inner-page">
                <div className="container">
                    <h1>Oops! A <span>404</span>!</h1>
                    <br />
                    <p>The page you are looking for does not exist. Go to the <Link to='/'>Homepage</Link> or <Link to='/contact'>Contact Us</Link>.</p>
                    
                </div>    
            </div>
        </>    
    )
}