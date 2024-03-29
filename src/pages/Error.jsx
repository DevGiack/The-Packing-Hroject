import BACKTO from "../assets/images/404/backToTheHomepage.webp"
import DELOREAN from "../assets/images/404/Delorean.webp"
import { Link } from "react-router-dom"
import "./Error.css"

export const Error = () => {
    return (
        <div className="body">
            <section className="notFound">
                <div className="img-error">
                    <img
                        src={BACKTO}
                        width="70%"
                        height="70%"
                        alt="Back to the Homepage"
                    />
                    <img
                        src={DELOREAN}
                        width="70%"
                        height="70%"
                        alt="El Delorean, El Doc y Marti McFly"
                    />
                </div>
                <div className="text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO HOME?</h3>
                    <Link to="/">YES</Link>
                    <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
                </div>
            </section>
        </div>
    )
}
