import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/eMoodji_logo_white.png";
import { useState, useEffect } from  "react";
import axios from "axios";
import Loading from './Loading';

export default function NavBar () {
    const [weather, setWeather] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(true);
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    };

    useEffect(() => {
        axios("https://api.weatherapi.com/v1/current.json?key=6a073340fe75460b9b3182849222505&q=auto:ip&condition:icon&temp_f")
        .then(res => {
          setWeather(res.data);
          setLoadingStatus(false);
        })  
        
    },[]);

    const loggedOutButtons = <>
    <Link to="/loginpage" className="homepage-button nav-button">Log In</Link>
    </>;

    const loggedInButtons = <>
    <Link to={`/users/${localStorage.getItem("userid")}`} className="homepage-button nav-button">View Account</Link>
    <Link to="/" className='homepage-button nav-button' id='logout' onClick={handleLogOut}>Log Out</Link> 
    </>;

    return (
        <nav className="NavBar">
        
            <Link to="/" style={{'textDecoration': 'none'}} ><img id="logo" src={logo} alt="Logo" style={{'width': "175px"}}/></Link>

            <div className='sub-navbar'>
                <div className='weatherDisplay'>
                    {loadingStatus ? <Loading width='50px' height='50px'/> : 
                    <>
                        <div><img id='weather-icon' alt='weatherIcon' src={`https:${weather?.current.condition.icon}`} /></div>
                        <div>{weather?.location.name}<br/>{weather?.current.temp_f + '°F'}</div>
                    </>
                    }
                </div>
                {localStorage.getItem("userid") ? <div id="welcome" >Welcome, {localStorage.getItem('firstName')}!</div> : null}
                {localStorage.getItem("userid") ? loggedInButtons : loggedOutButtons}
            </div>
        </nav>
    
    )
}