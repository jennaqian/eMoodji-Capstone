import { Link } from "react-router-dom";
import SignedInHomePage from "../components/SignedInHomePage";
// import { useState } from  "react";


export default function Home() {
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [loader, setLoader] = useState(false);

    if (localStorage.getItem("userid")) {
        return <SignedInHomePage />;
    } else {
        return (
        <div className="home">
            <div id="wallpaper">
                <div style={{ height: "50px" }}></div>
                    <section className="home-info">
                        <div className="left-info-box">
                            <h2>
                            One-stop quick reflections on your well-being! 
                            Discover relaxing activities and events near you!
                            </h2>
                        </div>
                        <div className="right-info-box">
                            <h3>Describe</h3>
                            <p>
                            Your current feelings with the use of a simple emoji
                            </p>
                            <h3>Choose</h3>
                            <p>
                            An interest from a short list of supported topics
                            </p>
                            <h3>Discover</h3>
                            <p>
                            NYC locations and businesses that provide therapeutic activities and events!
                            </p>
                        </div>
                    </section>

                <div className="inHomeBox">
                    <Link to="/wizard">
                        <button className="homepage-button">Get Started</button>
                    </Link>
                </div>
            </div>


            {/* <div className="email-subscription-form">
            <div className="email-subscription-title">
                Join the newsletter!
            </div>
            <p className="email-subscription-description">
                Subscribe for news on upcoming features!
            </p>
            <form>
                <div className="email-subscription-input">
                <input
                    type="text"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                ></input>
                </div>
                <div className="email-subscription-input">
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                </div>
                <button
                className="email-subscription-button"
                onClick={submitEmailSubscription}
                >
                {loader ? "Great! You'll be hearing from eMoodji soon!" : 'Subscribe'}
                </button>
            </form>
            </div> */}
        </div>
        );
    }
}
